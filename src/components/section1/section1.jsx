
import { useState } from 'react';
import './section1.css'
function Sec1()
{
    let name='Andrew Tate'
//wanting to change the background image of this div with clicking a button
/*
let things=[
    {name:"knife",id:1},
    {name:"plate",id:2},
    {name:"house",id:3}
]
things.push({name:"daniel",id:4})
*/

/*

  {things.map(thi=>(
            //thi is whatever variable used to loop though the things array
            <div key={thi.id} className="display"> 
            <h1>{thi.name}</h1>
            <h3>{thi.id}</h3>
            </div>
        ))}
       


*/
    return(
        
        <div className="sec1">

      

            <h2>Stay Up And Running</h2>
            <div className="first">
                <div className="box"></div>
                <div className="text">
                    <h3>Get in touch with a tutor</h3>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Doloribus perferendis neque consectetur sunt ab dignissimos
                          enim animi reiciendis recusandae. Quas recusandae rem
                          id inventore aspernatur deserunt suscipit quod! Ducimus, ex.
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                           Facilis architecto minima ab optio sed, quam obcaecati
                            aliquid dignissimos? Harum, unde. Voluptates optio 
                            id numquam? Quo saepe fugiat distinctio ea odio?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                           Facilis architecto minima ab optio sed, quam obcaecati
                            aliquid dignissimos? Harum, unde. Voluptates optio 
                            id numquam? Quo saepe fugiat distinctio ea odio?
                            <br />
                            <br />
                            <button>Get Started</button>
                    </h4>
                </div>
                
            </div>
           
            <h3 className="who">Who are we?</h3>
            <div className="second">
                <div className="box2">
                </div>
                <div className="text2">
                    <h3 className='Name'>{name}</h3>
                    <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Doloribus perferendis neque consectetur sunt ab dignissimos
                          enim animi reiciendis recusandae. Quas recusandae rem
                          id inventore aspernatur deserunt suscipit quod! Ducimus, ex.
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                           Facilis architecto minima ab optio sed, quam obcaecati
                            aliquid dignissimos? Harum, unde. Voluptates optio 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Doloribus perferendis neque consectetur sunt ab dignissimos
                          enim animi reiciendis recusandae. Quas recusandae rem
                          id inventore aspernatur deserunt suscipit quod! Ducimus, ex.
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                           Facilis architecto minima ab optio sed, quam obcaecati
                            aliquid dignissimos? Harum, unde. Voluptates optio 
                    </p>
                </div>
            </div>
        </div>

    );
}
export default Sec1