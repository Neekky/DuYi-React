import store from './store/index';
import { createChangeAction, setIsLoading, setStudentAndTotal, fetchStudents } from '../studentAdmSys/store/action/student';

console.log(store.getState(), '123123');

// store.dispatch(createChangeAction({
//     limit: 20,
//     sex: 0
// }));

// store.dispatch(setStudentAndTotal([1, 2, 3, 4], 12));

// store.dispatch(setIsLoading(true));

store.dispatch(fetchStudents(store.getState().students));