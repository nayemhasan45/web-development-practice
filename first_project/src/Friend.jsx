export default function Friend({friend}){
    console.log(friend);
    const {name,company,address}=friend;
    return(
        <div>
            <ul>
                <li>name : {name}</li>
                <li>Company Name : {company.name}</li>
                <li>City : {address.city}</li>
            </ul>
            
        </div>
    )
}