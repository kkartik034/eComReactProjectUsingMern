import { useContext, useEffect, useState } from "react"
import{ShopContext} from '../context/ShopContext'
import { assets } from "../assets/assets";
import Tittle from '../components/Tittle'
import ProductItem from '../components/ProductItem'
const Collection = () => {
  const { products } = useContext(ShopContext);

const [showFilter,setShowFilter] = useState(false);
const [filterProducts,setFilterProducts] = useState([]);
const [category, setCategory] = useState([]);
const [subCategory, setSubCategory] = useState([]);

const toggleCategory= (e)=> {
  if(category.includes(e.target.value)){
    setCategory(prev=> prev.filter(item=> item !== e.target.value))
}
else{
  setCategory(prev => [...prev,e.target.value])
}
}
useEffect(()=>{
setFilterProducts(products)
},[])
useEffect(()=>{
  console.log(subCategory);
  },[subCategory])

  const toggleSubCategory= (e)=> {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item=> item !== e.target.value))
  }
  else{
    setSubCategory(prev => [...prev,e.target.value])
  }
  }


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
{/* {Filter Options} */}
<div className='min-w-60'>
  <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters
    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
  </p>
{/* {Category FIlter} */}
<div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
<p className='mb-3 text-sm font-medium'>Categories</p>
<div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
<p className='flex gap-2 '>
  <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />Men
</p>
<p className='flex gap-2 '>
  <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />Women
</p>
<p className='flex gap-2 '>
  <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
</p>
</div>
</div>
{/* {SubcategoryFilter} */}
<div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
<p className='mb-3 text-sm font-medium'>Type</p>
<div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
<p className='flex gap-2 '>
  <input className='w-3' type="checkbox" value={'TopWear'} onChange={toggleSubCategory}/>TopWear
</p>
<p className='flex gap-2 '>
  <input className='w-3' type="checkbox" value={'BottomWear'} onChange={toggleSubCategory}/>BottomWear
</p>
<p className='flex gap-2 '>
  <input className='w-3' type="checkbox" value={'WinterWear'} onChange={toggleSubCategory}/>WinterWear
</p>
</div>
</div>
</div>

{/* {right-side} */}
  <div className='flex-1'>
    <div className='flex justify-between text-base sm:text-2xl mb-4'>
<Tittle text1={'ALL'} text2={'Collections'} />
{/* {Product Sort} */}
<select className='border-2 border-gray-300 text-sm px-2' name="" id="">
  <option value="relevent">Sort by: Relavent</option>
  <option value="low-high">Sort by: Low to High</option>
  <option value="high-low">Sort by: High to Low</option>
</select>
    </div>
    {/* {Map products} */}
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
{
  filterProducts.map((item,index)=>(
    <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
  ))
}
    </div>
  </div>
    </div>
  )
}

export default Collection