function TodoList({todos}) {
    return(
        <>
        {todos.map((todo ,ind)=> {
            return( 
              <div key={todo.id} className='flex bg-slate-100 '>
      <h3 className='text-2xl test-left py-2 pl-2 font-mono font-medium flex-1'>{todo.todo}</h3>
      <button className='bg-red-200 rounded-sm p-2 p-4'>Delete</button>
              </div>
            )
          })}
          </>
    )
}export default TodoList