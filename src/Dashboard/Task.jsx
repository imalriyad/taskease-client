import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import useTask from "../Hooks/useTask";

const Task = () => {
  const [task] = useTask();
  const { user } = useAuth();
  const [filterTask, setFilterTask] = useState([]);

  const openModal = (taskId) => {
    const taskDetails = task.find((task) => task._id === taskId);
    setFilterTask(taskDetails);
    document.getElementById("my_modal_4").showModal();
  };


  

  return (
    <div>
      <h1 className="md:py-2 text-xl">Welcome Back, {user?.displayName}</h1>
      <div className="md:flex items-center justify-between gap-2">
        <div className="bg-white p-3 rounded-sm w-full border-t-2 border-orange-500 font-medium text-sm">
          <h1>To do</h1>
        </div>
        <div className="bg-white p-3 rounded-sm w-full border-t-2 border-purple-500 font-medium text-sm">
          <h1>OnGoing</h1>
        </div>
        <div className="bg-white p-3 rounded-sm w-full border-t-2  border-green-500 font-medium text-sm">
          <h1>Completed </h1>
        </div>
      </div>

      <div className=" pt-4 items-start justify-between gap-2">
        <div className="w-full relative gap-4 md:grid grid-cols-3 ">
          {task?.map((item) => (
            <div
              key={item._id}
              className="bg-base-100 rounded-md text-neutral relative p-4"
            >
              <h1 className="text-sm">
                <span className="font-medium">Title : </span>
                {item.title}
              </h1>

              <button
                onClick={() => openModal(item._id)}
                className="btn bg-green-500 hover:bg-green-500 btn-xs absolute bottom-2 right-2 "
              >
                View
              </button>
            </div>
          ))}

          <dialog id="my_modal_4" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Title: {filterTask?.title}</h3>
              <p className="py-4">
               {filterTask?.description}
              
              </p>
              <p>Deadline: {filterTask?.deadline?.slice(0, 10)} </p>
              <p className="capitalize">Priority: {filterTask?.priority} </p>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Task;
