function getData() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => loadData(data.categories))
}
const loadData = (allData) =>{
    allData.map(data => {
        const getAllBtn=document.getElementById('all-btn');
        const createBtn=document.createElement('button');
        createBtn.innerText=data.category;
        createBtn.classList.add('btn','bg-[#17171710]','text-[#171717]','hover:bg-[#FF1F3D]','hover:text-white','btn-sm');
        getAllBtn.appendChild(createBtn);
    });
}
getData();