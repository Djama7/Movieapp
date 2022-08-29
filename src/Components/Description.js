
import {useParams} from "react-router-dom";




function Description({movies}){
    let { amine } = useParams();
    let a = movies.find(ele => ele.id === +amine);
    
    return(
        <div className="desc">
          <br/>
          <h1>{a.name}</h1>
          <br/>
        <img src={a.image} alt='aa' style={{width : '60%', marginLeft : '20%'}}/>
        <h3>Description</h3>
        <h4>{a.description}</h4>
        <br/>
        <iframe width="560" height="315" src={a.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <iframe width="520" height="300" src={a.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <br/>
            
             
              
            
          
         
          
          
                  
        </div>
        )
}

export default Description