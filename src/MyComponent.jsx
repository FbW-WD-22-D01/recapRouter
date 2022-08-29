function MyComponent(){

    // const myName = 'Christoph'
    const time = 'früh'
    const myObjekt = {user: 'Christoph'}
    const userArray = ['user1', 'user2', 'user3']



    // console.log(  time === 'abend' ? 'Gute Nacht' : 'Guten morgen'   )

    // console.log('Map: ', userArray.map( item => {
    //    return item + ' ich bin nochmal gemappt'
    // }))

    


    return(
        <>
            <h1>Ich bin { myObjekt.user  }</h1>
            <button>Klick mich</button>
            <p>{ time === 'abend' ? 'Gute Nacht' : 'Guten Morgen' }</p>
            
            <ul>
                { 
                    userArray.map( (data,index) => <li key={index}>{ data }</li> )
                }
            </ul>
        </>
    )

}

export default MyComponent

