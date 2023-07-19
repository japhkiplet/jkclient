import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './products.css'
import {storage} from '../Firebase'
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import { addProduct } from '../redux/apiCalls'
import {useSelector, useDispatch} from 'react-redux';

const schema = yup.object({
    Title: yup.string().required(),
    Description: yup.string().required(),
    Category: yup.string().required(),
    Price: yup.string().required(),
    imageurl: yup.mixed()
})

function Product() { 
  const dispatch = useDispatch();
    const onSubmit= async(data)=>{
      const { Title, Description, Category,   Price, imageurl } = data;

      const imageFile = imageurl[0];
      const imageRef= ref(storage, `images${imageFile.name}`)  
      await uploadBytes(imageRef ,imageFile).then(()=>{
            alert('image uploaded')
          })
          
            

          const ImageURL = await getDownloadURL(imageRef);
          const productData = {
              Title,
              Description,
              Category,
              Price,
              ImageURL,
            };


            addProduct(dispatch, productData)
    }
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)

    });

  return (
    <div className="products-page">
    <form className='formone' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='fade-in' >Add product here</h2>
        <input placeholder="title" {...register('Title')} />
        {errors.Title && <p>{errors.Title.message}</p>}
        <input type='category' placeholder='category'{...register('Category')}/>
        {errors.Category && <p>{errors.Category.message}</p>}
        <textarea placeholder="description" {...register('Description')}></textarea>
        {errors.Description && <p>{errors.Description.message}</p>}
        <input type='price' placeholder='price'{...register('Price')}/>
        {errors.Price && <p>{errors.Price.message}</p>}  
        <input type='file' placeholder='images'{...register('imageurl')}/>
        {errors.imageurl && <p>{errors.imageurl.message}</p>}
        <button className='bg' type='submit'>add </button>
    </form>

   
</div>
  )
}

export default Product
