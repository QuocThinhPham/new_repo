import * as taskConstants from './../constants/tasks';

export const fetchTasks = () => ({
   type: taskConstants.FETCH_TASKS,
});

export const fetchTasksSuccess = (data) => ({
   type: taskConstants.FETCH_TASKS_SUCCESS,
   payload: {
      data,
   },
});

export const fetchTasksFailed = (error) => ({
   type: taskConstants.FETCH_TASKS_FAILED,
   payload: {
      error,
   },
});
