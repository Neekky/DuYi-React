const SHOW = '@@DVA_LOADING/SHOW';
const HIDE = '@@DVA_LOADING/HIDE';

export default function (opts = {}) {
    const namespace = opts.namespace || 'loading';

    const initialState = {
        global: false,
        models: {},
        effects: {}
    }

    function reducer(state = initialState, action) {
        const { namespace, actionType } = action.payload || {};
        const effects = {
            ...state.effects,
            [actionType]: false
        }
        const models = {
            ...state.models,
            [namespace]: Object.keys(effects).some(key => effects[key])
        }
        
        const global = Object.keys(models).some(key => models[key])
        switch (action.type) {
            case SHOW:
                return {
                    global: true,
                    models: {
                        ...models,
                        [namespace]: true
                    },
                    effects: {
                        ...effects,
                        [actionType]: true
                    }
                }
            case HIDE:
                return {
                    global,
                    models,
                    effects
                }
            default:
                return state;
        }
    }

    function onEffect(oldEffect, sagaEffects, model, actiontype) {
        return function* (action) {
            yield sagaEffects.put({
                type: SHOW, 
                payload:{
                    namespace: model.namespace, 
                    actionType: actiontype
                }
            })
            yield oldEffect(action);
            yield sagaEffects.put({
                type: HIDE, 
                payload:{
                    namespace: model.namespace, 
                    actionType: actiontype
                }
            })
        }
    }

    return {
        extraReducers: {
            [namespace]: reducer,
        },
        onEffect
    }
}