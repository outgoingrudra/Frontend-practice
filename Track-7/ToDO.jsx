import React from 'react'

export default function ToDo() {
    const [t ,setT] = React.useState("");
    const [tasks , setTasks] = React.useState(["Work","sleep"]);


    const addTask = ()=>{


        setTasks([...tasks , t]);
        setT("");

       
    }
    const deleteTask =(task)=>{
        return ()=>{
            const newTasks = tasks.filter((t)=> t !== task);
            setTasks(newTasks);
        }   
        

    }
     
  return (
    <div className='h-screen w-full '>

        <h1 className="font-bold  text-4xl underline text-center cursor-pointer "> To Do <span className="text-blue-700">App</span> </h1>

    <div className="flex justify-center  mt-10">
            <div className=" h-[60px] w-[85%]  flex justify-center items-center gap-0   ">
                <input value={t} onChange={(e)=>setT(e.target.value)} type="text" className=" border-2   h-[95%] rounded-l-md px-3  w-[80%] lg:w-[60%] xl:w-[45%] cursor-pointer  font-semibold tracking-tighter " placeholder='Enter ur task here ...' />
                <button onClick={addTask} className='bg-green-600 h-[95%]   p-4 font-mono font-bold rounded-r-md '> Add</button>
             </div>      
    </div>

<div className=" flex  justify-center">

    
    <div className="w-[80%] flex flex-col justify-center items-center mt-10 ">
         {
           tasks.length  ?       tasks.map((task)=>(
                        <div key={task} className="mt-5  bg-gray-200 p-4 rounded-md w-[85%] flex justify-between items-center ">
                            <h2 className="font-semibold text-lg ">{task}</h2>

                            <button onClick={deleteTask(task)} className="bg-red-500   p-2 rounded-md text-white font-bold "> Delete</button>
                        </div>
                    ))

                    : <h2 className="font-bold text-2xl "> No Tasks Available </h2>

                }
    </div>

</div>



    </div>
  )
}
