import React from 'react';
import './Question.css'

const question = () => {
    return (
        <div className='mt-20 accrodine'>
            <h1 className='text-center text-6xl font-bold mb-10 text-cyan-900'>Question And Anwser</h1>
            {/* accrodine 1 */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  How does react work?
  </div>
  <div className="collapse-content"> 
    <p>  ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
  </div>
</div>



            {/* accrodin end 1 */}

            {/* 2nd */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  Different between props and state?
  </div>
  <div className="collapse-content"> 
    <p>  Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component</p>
  </div>
</div>


{/* 2nd end */}

<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is the use of UseEffect in react without fetching data?
  </div>
  <div className="collapse-content"> 
    <p> 
    I know the conventional way when using hooks is to fetch the data using the useEffect hook. But why can't I just call axios in the functional component instead of a hook and then set the data.
    It will be called every time the component renders (e.g. props change, hook state changes). Try it. That will give you an infinite loop, since every time you update the state with getUsers, it'll re-render, triggering another request, triggering another rend.
    That said, you can also do it while avoiding an infinite loop but it's a very bad practice and I don't recommend it.
    </p>
  </div>
</div>
        </div>
    );
};

export default question;