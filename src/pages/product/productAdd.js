
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Airobike React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Airobike React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import axios from 'axios';
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { useNavigate } from "react-router-dom";
import Select from 'react-select';

import { useDispatch, useSelector } from "react-redux";
import { selectFace } from "slices/persSlice";


function ProductAdd() {
  
    // const dispatch = useDispatch()
    // const face = useSelector(selectFace)

    const navigate = useNavigate();
    const params = useParams();

    // console.log('params.s', params)

    const slug = params?.slug

    console.log('slug', slug)

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);


    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const [newImg, setNewImg] = useState(null)
    const [image2, setImage2] = useState(null)
    const [image3, setImage3] = useState(null)
    const [image4, setImage4] = useState(null)
    const [video_url, setVideo_url] = useState('')
    const [category, setCategory] = useState(null)
    const [subcategory, setSubcategory] = useState(null)
    const [price, setPrice] = useState('')
    const [isHit, setIsHit] = useState(false)
    const [isSpeciale, setIsSpeciale] = useState(false)
    const [isAvailable, setIsAvailable] = useState(true)
    const [country, setCountry] = useState('')

    const [marka, setmarka] = useState('')
    const [razmer_ramy, setrazmer_ramy] = useState('')
    const [tip_velo, settip_velo] = useState('')
    const [tip_amort, settip_amort] = useState('')
    const [form_factor_ramy, setform_factor_ramy] = useState('')
    const [kolichestvo_skor, setkolichestvo_skor] = useState('')
    const [konstr_vilki, setkonstr_vilki] = useState('')
    const [naduvnye_kolesa, setnaduvnye_kolesa] = useState(true)
    const [god_vypuska, setgod_vypuska] = useState('')


    const [material, setmaterial] = useState('')
    const [material_corpusa, setmaterial_corpusa] = useState('')
    const [material_rukoyatki, setmaterial_rukoyatki] = useState('')
    const [material_coles, setmaterial_coles] = useState('')
    const [material_sostavliaushih, setmaterial_sostavliaushih] = useState('')
    const [material_sidenya, setmaterial_sidenya] = useState('')
    const [podshipniki, setpodshipniki] = useState('')
    const [rost, setrost] = useState('')
    const [polozhenie, setpolozhenie] = useState('')
    const [vysota_rulya, setvysota_rulya] = useState('')
    const [colich_koles, setcolich_koles] = useState('')
    const [diametre, setdiametre] = useState('')
    const [maks_nagruzka, setmaks_nagruzka] = useState('')
    const [tormoz, settormoz] = useState('')
    const [pokrytie_platformy, setpokrytie_platformy] = useState('')
    const [ves, setves] = useState('')
    const [s_ruchkoi, sets_ruchkoi] = useState(false)
    const [muzykalnyi, setmuzykalnyi] = useState(false)
    const [s_navesom, sets_navesom] = useState(false)
    const [vozdushnyi_signal, setvozdushnyi_signal] = useState('')
    const [skladnoy, setskladnoy] = useState(false)
    const [regulirovka, setregulirovka] = useState('')
    const [povorot, setpovorot] = useState('')
    const [vozrast, setvozrast] = useState('')
    const [zaryadka, setzaryadka] = useState('')
    const [pult, setpult] = useState('')
    const [komplektasya, setkomplektasya] = useState('')
    const [podstavka_dlya_korm, setpodstavka_dlya_korm] = useState('')
    const [moshnost_akumulatora, setmoshnost_akumulatora] = useState('')
    const [mest, setmest] = useState('')
    const [skorost, setskorost] = useState('')
    

    const [categories, setCategories] = useState([])
    const [fcategories, setFcategories] = useState([])
    const getCategory = async () => {
        const token = localStorage.getItem("token")

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        try {
            setLoading(true)
            const response = await axios.get(`http://185.125.90.121/api/v1/categories/list/`, config)
            .then(res => {
                const o = res.data;
                // console.log(`orders =`, orders)
                setCategories(o)
                setFcategories(o)
                setLoading(false)
                setErrors(null)
            })
        } catch (error) {
            setLoading(false)
            setCategories([])
            setFcategories([])
            setErrors(error.message)
            console.log(`error data =`, error)
        }
    }



    useEffect(() => {
        // getOrder();
        getCategory();
        // getSubCategory();
    }, [])

    const options = categories

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [findedCat, setFindedCat] = useState({})

    // console.log('selectedCategory', selectedCategory)

    useEffect(() => {
        if(selectedCategory != null || selectedCategory != 'null'){
            const filtered = fcategories?.filter((i) => i.title === selectedCategory)
            setFcategories(filtered)
            
            function findCherries(category) { 
                return category.title === selectedCategory;
            }
            const result = filtered?.find(findCherries); 
            setFindedCat(result)
            console.log('result', result)
              
        }

        if (selectedCategory === null || selectedCategory === 'null') {
            setSelectedSubCategory(null)
            setFcategories(categories)
        }
      
    }, [selectedCategory])
    
  
    // console.log('fcategories', fcategories)


    const suboptions = fcategories

    const [selectedSubCategory, setSelectedSubCategory] = useState(null);


    const onIsHit = () => setIsHit(previousState => !previousState);
    const onIsSpeciale = () => setIsSpeciale(previousState => !previousState);
    const onIsAvailable = () => setIsAvailable(previousState => !previousState);

    const onNaduvnyeKolesa = () => setnaduvnye_kolesa(previousState => !previousState);
    const onSruchkoi = () => sets_ruchkoi(previousState => !previousState);
    const onMuzykalnyi = () => setmuzykalnyi(previousState => !previousState);
    const onSnavesom = () => sets_navesom(previousState => !previousState);
    const onSkladnoy = () => setskladnoy(previousState => !previousState);

    const uploadFileHandler = async(e) => {
        const file = e.target.files[0]
        setNewImg(file)
        console.log('file', file)
    }

    const uploadFileHandler2 = async(e) => {
        const file = e.target.files[0]
        setImage2(file)
        // console.log('file', image)
    }

    const uploadFileHandler3 = async(e) => {
        const file = e.target.files[0]
        setImage3(file)
        // console.log('file', image)
    }

    const uploadFileHandler4 = async(e) => {
        const file = e.target.files[0]
        setImage4(file)
        // console.log('file', image)
    }

    console.log('findedCat', findedCat)
    console.log('selectedSubCategory', selectedSubCategory)
    // Товары /////// //////////////////////
    const postProduct = async (e) => {
        e.preventDefault()
        try {

            if(title === '' || price === '' || findedCat === undefined || selectedSubCategory === null ) {
                setErrors('Укажите обязательные параметры: Название, Цена, Категория, Субкатегория')
            } else {

                let formData = new FormData();
                formData.append("user", 3);
                formData.append("title", title);
                formData.append("description", description);

                if(newImg != null) {
                    formData.append("image", newImg);
                }

                if(image2 != null) {
                    formData.append("image2", image2);
                }
                if(image3 != null) {
                    formData.append("image2", image3);
                }
                if(image4 != null) {
                    formData.append("image2", image4);
                }

                
                formData.append("video_url", video_url);
                formData.append("category", findedCat?.id);
                formData.append("subcategory", selectedSubCategory); 
                formData.append("price", price);
                formData.append("isHit", isHit);
                formData.append("isSpeciale", isSpeciale);
                formData.append("isAvailable", isAvailable);
                formData.append("country", country);

                formData.append("marka", marka);
                formData.append("razmer_ramy", razmer_ramy);
                formData.append("tip_velo", tip_velo);
                formData.append("tip_amort", tip_amort);
                formData.append("form_factor_ramy", form_factor_ramy);
                formData.append("kolichestvo_skor", kolichestvo_skor);
                formData.append("konstr_vilki", konstr_vilki);
                formData.append("naduvnye_kolesa", naduvnye_kolesa);
                formData.append("god_vypuska", god_vypuska);
                
                formData.append("material", material);
                formData.append("material_corpusa", material_corpusa);
                formData.append("material_rukoyatki", material_rukoyatki);
                formData.append("material_coles", material_coles);
                formData.append("material_sostavliaushih", material_sostavliaushih);
                formData.append("material_sidenya", material_sidenya);
                formData.append("podshipniki", podshipniki);
                formData.append("polozhenie", polozhenie);
                formData.append("rost", rost);
                formData.append("vysota_rulya", vysota_rulya);
                formData.append("diametre", diametre);
                formData.append("maks_nagruzka", maks_nagruzka);
                formData.append("pokrytie_platformy", pokrytie_platformy);
                formData.append("ves", ves);
                formData.append("s_ruchkoi", s_ruchkoi);
                formData.append("muzykalnyi", muzykalnyi);
                formData.append("s_navesom", s_navesom);
                formData.append("vozdushnyi_signal", vozdushnyi_signal);
                formData.append("skladnoy", skladnoy);
                formData.append("regulirovka", regulirovka);
                formData.append("povorot", povorot);
                formData.append("vozrast", vozrast);
                formData.append("zaryadka", zaryadka);
                formData.append("pult", pult);
                formData.append("komplektasya", komplektasya);
                formData.append("podstavka_dlya_korm", podstavka_dlya_korm);
                formData.append("moshnost_akumulatora", moshnost_akumulatora);
                formData.append("mest", mest);
                formData.append("skorost", skorost);


                const token = localStorage.getItem("token")

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    }
                }

                setLoading(true)
                // console.log(`user`, user)
                const response = await axios.post(`http://185.125.90.121/api/v1/products/post/`, formData, config)
                .then(res => {
                    const productUpdated = res.data;
                    console.log(`productPosted =`, productUpdated)
                    
                    setLoading(false)
                
                    setErrors(null)
                    navigate("/products");
                    // navigate(ADMIN_PRODUCT_LIST)
                }).catch((err) => {
                    setErrors(err.message)
                    console.log(`err ===`, err.message)
                })
            }
        } catch (error) {
            setLoading(false)
            // setErrors(error)
            console.log(`error data =`, error)
        }
    }
    
    // console.log('categories', categories)

    return (
        <DashboardLayout>
        <DashboardNavbar />
            <Grid container spacing={3}>
                
                <Grid item xs={12} xl={6}>
                    <Form onSubmit={postProduct}>
                        
                        <Form.Group className="mb-3" controlId='title'>
                            <Form.Label>Название *</Form.Label>
                            <br/>
                            <Form.Control
                                style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                type='text'
                                placeholder='Название'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='descr'>
                            <Form.Label>Описание *</Form.Label>
                            <br/>
                            <Form.Control
                                as="textarea" rows={6}
                                style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                type='text'
                                placeholder='Описание'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='price'>
                            <Form.Label>Цена *</Form.Label>
                            <br/>
                            <Form.Control
                                style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                type='number'
                                placeholder='Цена'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='image'>
                            <Form.Label>Изображение товара (не обяз)</Form.Label>
                            <br/>
                            <Form.Control
                                style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                type='file'
                                placeholder='Изображение глав'
                                onChange={uploadFileHandler}
                            >
                            </Form.Control>
                            <Form.Control
                                style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                type='file'
                                placeholder='Изображение 2'
                                onChange={uploadFileHandler2}
                            >
                            </Form.Control>
                            <Form.Control
                                style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                type='file'
                                placeholder='Изображение 3'
                                onChange={uploadFileHandler3}
                            >
                            </Form.Control>
                            <Form.Control
                                style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                type='file'
                                placeholder='Изображение 4'
                                onChange={uploadFileHandler4}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='brand'>
                            <Form.Label>Видео ссылка на youtube (не обяз)</Form.Label>
                            <br/>
                            <Form.Control
                                style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                type='text'
                                placeholder='https://www.youtube.com/?gl=KZ'
                                value={video_url}
                                onChange={(e) => setVideo_url(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group> 
                        {/* categoty */}
                        <Form.Group className="mb-3" controlId='category'>
                            <Form.Label>Категория *</Form.Label>
                            <br/>
                            <Form.Select style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}} defaultValue={null} name="myParameter" 
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)} 
                            >
                                <option value="null">Выбрать категорию</option>
                                {categories.map((i) => (
                                    <option key={i.id} value={i.title}>{i.title}</option>
                                ))}
                            </Form.Select>

                        </Form.Group>
                        <>
                            { selectedCategory === null || selectedCategory === 'null' ? null :
                                <Form.Group className="mb-3" controlId='subcategory'>
                                    <Form.Label>Суб Категория *</Form.Label>
                                    <br/>
                                    <Form.Select style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}} defaultValue={null} name="myParameters" onChange={(e) => setSelectedSubCategory(e.target.value)} value={selectedSubCategory}>
                                        <option value="null">Выбрать субкатегорию</option>
                                        {findedCat?.sCategory?.map((i) => (
                                            <option value={i._id}>{i.title}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>

                            }
                        </>
                        <Form.Group className="mb-3" controlId='da'>
                            {/* <Form.Label>Хит продажи?</Form.Label> */}
                            {/* <br/> */}
                            <Form.Switch
                                onChange={onIsHit}
                                id="custom-switch"
                                label="Хит продажи?"
                                checked={isHit}
                                // disabled // apply if you want the switch disabled
                            />
                            <Form.Switch
                                onChange={onIsSpeciale}
                                id="custom-switch"
                                label="Спец предложение?"
                                checked={isSpeciale}
                                // disabled // apply if you want the switch disabled
                            />
                            <Form.Switch
                                onChange={onIsAvailable}
                                id="custom-switch"
                                label="Товар доступен?"
                                checked={isAvailable}
                                // disabled // apply if you want the switch disabled
                            />
                        </Form.Group>
                    
                        <>
                        {slug === 'all' &&
                            <>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Марка</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={marka}
                                        onChange={(e) => setmarka(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Размер рамы</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={razmer_ramy}
                                        onChange={(e) => setrazmer_ramy(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Тип</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={tip_velo}
                                        onChange={(e) => settip_velo(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Тип амортизации</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={tip_amort}
                                        onChange={(e) => settip_amort(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Форм фактор рамы</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={form_factor_ramy}
                                        onChange={(e) => setform_factor_ramy(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Кол-во скоростей</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={kolichestvo_skor}
                                        onChange={(e) => setkolichestvo_skor(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Конструкция вилки</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={konstr_vilki}
                                        onChange={(e) => setkonstr_vilki(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Год выпуска</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={god_vypuska}
                                        onChange={(e) => setgod_vypuska(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Страна пр-ва</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder='Страна пр-ва'
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                {/* Материал */}
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material}
                                        onChange={(e) => setmaterial(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал корпуса</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_corpusa}
                                        onChange={(e) => setmaterial_corpusa(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал рукоятки</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_rukoyatki}
                                        onChange={(e) => setmaterial_rukoyatki(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал колес</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_coles}
                                        onChange={(e) => setmaterial_coles(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал составляющих</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_sostavliaushih}
                                        onChange={(e) => setmaterial_sostavliaushih(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал сиденья</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_sidenya}
                                        onChange={(e) => setmaterial_sidenya(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Подшипники</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={podshipniki}
                                        onChange={(e) => setpodshipniki(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Положение</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={polozhenie}
                                        onChange={(e) => setpolozhenie(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Рост</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={rost}
                                        onChange={(e) => setrost(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Высота руля</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={vysota_rulya}
                                        onChange={(e) => setvysota_rulya(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Количество колёс</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={colich_koles}
                                        onChange={(e) => setcolich_koles(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Диаметр колеса</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={diametre}
                                        onChange={(e) => setdiametre(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Макс. нагрузка</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={maks_nagruzka}
                                        onChange={(e) => setmaks_nagruzka(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Тормоз</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={tormoz}
                                        onChange={(e) => settormoz(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Покрытие платформы</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={pokrytie_platformy}
                                        onChange={(e) => setpokrytie_platformy(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Вес</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={ves}
                                        onChange={(e) => setves(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Воздушный сигнал</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={vozdushnyi_signal}
                                        onChange={(e) => setvozdushnyi_signal(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Регулировка</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={regulirovka}
                                        onChange={(e) => setregulirovka(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Поворот</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={povorot}
                                        onChange={(e) => setpovorot(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Возраст</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={vozrast}
                                        onChange={(e) => setvozrast(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Зарядка</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={zaryadka}
                                        onChange={(e) => setzaryadka(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Пульт</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={pult}
                                        onChange={(e) => setpult(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Комплектация</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={komplektasya}
                                        onChange={(e) => setkomplektasya(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Подставка для кормл</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={podstavka_dlya_korm}
                                        onChange={(e) => setpodstavka_dlya_korm(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Mощность аккум</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={moshnost_akumulatora}
                                        onChange={(e) => setmoshnost_akumulatora(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Мест</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={mest}
                                        onChange={(e) => setmest(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Скорость</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={skorost}
                                        onChange={(e) => setskorost(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                {/* TRUEFALSE */}
                                <>
                                    <Grid item xs={12} xl={6}>
                                        <Form.Group className="mb-3" controlId='da'>
                                            <Form.Switch
                                                onChange={onNaduvnyeKolesa}
                                                id="custom-switch"
                                                label="Надувные колеса?"
                                                checked={naduvnye_kolesa}
                                            />
                                        </Form.Group>
                                    </Grid>
                                    <Grid item xs={12} xl={6}>
                                        <Form.Group className="mb-3" controlId='da'>
                                            <Form.Switch
                                                onChange={onSruchkoi}
                                                id="custom-switch"
                                                label="С ручкой?"
                                                checked={s_ruchkoi}
                                            />
                                        </Form.Group>
                                    </Grid>
                                    <Grid item xs={12} xl={6}>
                                        <Form.Group className="mb-3" controlId='da'>
                                            <Form.Switch
                                                onChange={onMuzykalnyi}
                                                id="custom-switch"
                                                label="Музыкальный?"
                                                checked={muzykalnyi}
                                            />
                                        </Form.Group>
                                    </Grid>
                                    <Grid item xs={12} xl={6}>
                                        <Form.Group className="mb-3" controlId='da'>
                                            <Form.Switch
                                                onChange={onSnavesom}
                                                id="custom-switch"
                                                label="С навесом?"
                                                checked={s_navesom}
                                            />
                                        </Form.Group>
                                    </Grid>
                                    <Grid item xs={12} xl={6}>
                                        <Form.Group className="mb-3" controlId='da'>
                                            <Form.Switch
                                                onChange={onSkladnoy}
                                                id="custom-switch"
                                                label="Складной?"
                                                checked={skladnoy}
                                            />
                                        </Form.Group>
                                    </Grid>
                                </>
                            </>
                        }
                        </>


                        <>
                        {slug === 'samokaty' &&
                            <>
                                {/* Материал */}
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material}
                                        onChange={(e) => setmaterial(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал корпуса</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_corpusa}
                                        onChange={(e) => setmaterial_corpusa(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал рукоятки</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_rukoyatki}
                                        onChange={(e) => setmaterial_rukoyatki(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал колеса</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_coles}
                                        onChange={(e) => setmaterial_coles(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Подшипники</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={podshipniki}
                                        onChange={(e) => setpodshipniki(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Положение</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={polozhenie}
                                        onChange={(e) => setpolozhenie(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Рост</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={rost}
                                        onChange={(e) => setrost(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Высота руля</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={vysota_rulya}
                                        onChange={(e) => setvysota_rulya(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Количество колёс</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={colich_koles}
                                        onChange={(e) => setcolich_koles(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Диаметр колеса</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={diametre}
                                        onChange={(e) => setdiametre(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Макс. нагрузка</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={maks_nagruzka}
                                        onChange={(e) => setmaks_nagruzka(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Тормоз</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={tormoz}
                                        onChange={(e) => settormoz(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Покрытие платформы</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={pokrytie_platformy}
                                        onChange={(e) => setpokrytie_platformy(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Вес</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={ves}
                                        onChange={(e) => setves(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Страна пр-ва</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder='Страна пр-ва'
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                
                                
                            </>
                        }
                        </>

                        <>
                        {slug === 'tolokars' &&
                            <>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Марка</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={marka}
                                        onChange={(e) => setmarka(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Воздушный сигнал</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={vozdushnyi_signal}
                                        onChange={(e) => setvozdushnyi_signal(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                {/* TRUEFALSE */}
                                <>
                                   
                                    <Grid item xs={12} xl={6}>
                                        <Form.Group className="mb-3" controlId='da'>
                                            <Form.Switch
                                                onChange={onSruchkoi}
                                                id="custom-switch"
                                                label="С ручкой?"
                                                checked={s_ruchkoi}
                                            />
                                        </Form.Group>
                                    </Grid>
                                    <Grid item xs={12} xl={6}>
                                        <Form.Group className="mb-3" controlId='da'>
                                            <Form.Switch
                                                onChange={onMuzykalnyi}
                                                id="custom-switch"
                                                label="Музыкальный?"
                                                checked={muzykalnyi}
                                            />
                                        </Form.Group>
                                    </Grid>
                                    <Grid item xs={12} xl={6}>
                                        <Form.Group className="mb-3" controlId='da'>
                                            <Form.Switch
                                                onChange={onSnavesom}
                                                id="custom-switch"
                                                label="С навесом?"
                                                checked={s_navesom}
                                            />
                                        </Form.Group>
                                    </Grid>
                                    <Grid item xs={12} xl={6}>
                                        <Form.Group className="mb-3" controlId='da'>
                                            <Form.Switch
                                                onChange={onSkladnoy}
                                                id="custom-switch"
                                                label="Складной?"
                                                checked={skladnoy}
                                            />
                                        </Form.Group>
                                    </Grid>
                                </>
                            </>
                        }
                        </>

                        <>
                        {slug === 'stulchikikormlenya' &&
                            <>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Страна пр-ва</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder='Страна пр-ва'
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                {/* Материал */}
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал корпуса</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_corpusa}
                                        onChange={(e) => setmaterial_corpusa(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал колес</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_coles}
                                        onChange={(e) => setmaterial_coles(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал составляющих</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_sostavliaushih}
                                        onChange={(e) => setmaterial_sostavliaushih(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Регулировка</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={regulirovka}
                                        onChange={(e) => setregulirovka(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                {/* TRUEFALSE */}
                                <>
                                    <Grid item xs={12} xl={6}>
                                        <Form.Group className="mb-3" controlId='da'>
                                            <Form.Switch
                                                onChange={onSkladnoy}
                                                id="custom-switch"
                                                label="Складной?"
                                                checked={skladnoy}
                                            />
                                        </Form.Group>
                                    </Grid>
                                </>
                            </>
                        }
                        </>

                        <>
                        {slug === 'party' &&
                            <>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Страна пр-ва</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder='Страна пр-ва'
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал корпуса</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_corpusa}
                                        onChange={(e) => setmaterial_corpusa(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Макс. нагрузка</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={maks_nagruzka}
                                        onChange={(e) => setmaks_nagruzka(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                {/* TRUEFALSE */}
                                <>
                                    <Grid item xs={12} xl={6}>
                                        <Form.Group className="mb-3" controlId='da'>
                                            <Form.Switch
                                                onChange={onSkladnoy}
                                                id="custom-switch"
                                                label="Складной?"
                                                checked={skladnoy}
                                            />
                                        </Form.Group>
                                    </Grid>
                                </>
                            </>
                        }
                        </>


                        <>
                        {slug === 'shezlongi' &&
                            <>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Страна пр-ва</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder='Страна пр-ва'
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                {/* Материал */}
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал корпуса</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_corpusa}
                                        onChange={(e) => setmaterial_corpusa(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал составляющих</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_sostavliaushih}
                                        onChange={(e) => setmaterial_sostavliaushih(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Положение</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={polozhenie}
                                        onChange={(e) => setpolozhenie(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Поворот</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={povorot}
                                        onChange={(e) => setpovorot(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Возраст</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={vozrast}
                                        onChange={(e) => setvozrast(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Зарядка</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={zaryadka}
                                        onChange={(e) => setzaryadka(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Пульт</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={pult}
                                        onChange={(e) => setpult(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                            </>
                        }
                        </>

                        <>
                        {slug === 'molberty' &&
                            <>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Страна пр-ва</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder='Страна пр-ва'
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                {/* Материал */}
                                
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал корпуса</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_corpusa}
                                        onChange={(e) => setmaterial_corpusa(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал составляющих</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_sostavliaushih}
                                        onChange={(e) => setmaterial_sostavliaushih(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Возраст</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={vozrast}
                                        onChange={(e) => setvozrast(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Комплектация</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={komplektasya}
                                        onChange={(e) => setkomplektasya(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                            </>
                        }
                        </>

                        <>
                        {slug === 'kacheli' &&
                            <>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Страна пр-ва</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder='Страна пр-ва'
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                {/* Материал */}
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал корпуса</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_corpusa}
                                        onChange={(e) => setmaterial_corpusa(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал составляющих</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_sostavliaushih}
                                        onChange={(e) => setmaterial_sostavliaushih(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Макс. нагрузка</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={maks_nagruzka}
                                        onChange={(e) => setmaks_nagruzka(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                            </>
                        }
                        </>

                        <>
                        {slug === 'khodunki' &&
                            <>
                                {/* Материал */}
                                
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал корпуса</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_corpusa}
                                        onChange={(e) => setmaterial_corpusa(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал колес</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_coles}
                                        onChange={(e) => setmaterial_coles(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал составляющих</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_sostavliaushih}
                                        onChange={(e) => setmaterial_sostavliaushih(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Положение</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={polozhenie}
                                        onChange={(e) => setpolozhenie(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Подставка для кормл</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={podstavka_dlya_korm}
                                        onChange={(e) => setpodstavka_dlya_korm(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                {/* TRUEFALSE */}
                                <>
                                    
                                    <Grid item xs={12} xl={6}>
                                        <Form.Group className="mb-3" controlId='da'>
                                            <Form.Switch
                                                onChange={onMuzykalnyi}
                                                id="custom-switch"
                                                label="Музыкальный?"
                                                checked={muzykalnyi}
                                            />
                                        </Form.Group>
                                    </Grid>
                                    
                                </>
                            </>
                        }
                        </>


                        <>
                        {slug === 'electrocars' &&
                            <>
                                
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Страна пр-ва</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder='Страна пр-ва'
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                {/* Материал */}
                                
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал колес</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_coles}
                                        onChange={(e) => setmaterial_coles(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал сиденья</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_sidenya}
                                        onChange={(e) => setmaterial_sidenya(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Макс. нагрузка</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={maks_nagruzka}
                                        onChange={(e) => setmaks_nagruzka(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Mощность аккум</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={moshnost_akumulatora}
                                        onChange={(e) => setmoshnost_akumulatora(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Мест</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={mest}
                                        onChange={(e) => setmest(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                

                                {/* TRUEFALSE */}
                                
                            </>
                        }
                        </>

                        <>
                        {slug === 'kolyaski' &&
                            <>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Тип</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={tip_velo}
                                        onChange={(e) => settip_velo(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                {/* Материал */}
                                
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал колес</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_coles}
                                        onChange={(e) => setmaterial_coles(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Вес</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={ves}
                                        onChange={(e) => setves(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Комплектация</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={komplektasya}
                                        onChange={(e) => setkomplektasya(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                
                                {/* TRUEFALSE */}
                                <>
                                    
                                    <Grid item xs={12} xl={6}>
                                        <Form.Group className="mb-3" controlId='da'>
                                            <Form.Switch
                                                onChange={onSkladnoy}
                                                id="custom-switch"
                                                label="Складной?"
                                                checked={skladnoy}
                                            />
                                        </Form.Group>
                                    </Grid>
                                    
                                </>
                            </>
                        }
                        </>

                        <>
                        {slug === 'hyroskooters' &&
                            <>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Диаметр колеса</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={diametre}
                                        onChange={(e) => setdiametre(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Макс. нагрузка</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={maks_nagruzka}
                                        onChange={(e) => setmaks_nagruzka(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Возраст</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={vozrast}
                                        onChange={(e) => setvozrast(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Зарядка</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={zaryadka}
                                        onChange={(e) => setzaryadka(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Скорость</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={skorost}
                                        onChange={(e) => setskorost(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                {/* TRUEFALSE */}
                                
                            </>
                        }
                        </>

                        <>
                        {slug === 'sigways' &&
                            <>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал колес</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material_coles}
                                        onChange={(e) => setmaterial_coles(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Регулировка руля</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={regulirovka}
                                        onChange={(e) => setregulirovka(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Скорость</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={skorost}
                                        onChange={(e) => setskorost(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                {/* TRUEFALSE */}
                                
                            </>
                        }
                        </>

                        <>
                        {slug === 'bikes' &&
                            <>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Марка</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={marka}
                                        onChange={(e) => setmarka(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Размер рамы</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={razmer_ramy}
                                        onChange={(e) => setrazmer_ramy(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Тип велосипеда</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={tip_velo}
                                        onChange={(e) => settip_velo(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Тип амортизации</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={tip_amort}
                                        onChange={(e) => settip_amort(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Форм фактор рамы</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={form_factor_ramy}
                                        onChange={(e) => setform_factor_ramy(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Кол-во скоростей</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={kolichestvo_skor}
                                        onChange={(e) => setkolichestvo_skor(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Конструкция вилки</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={konstr_vilki}
                                        onChange={(e) => setkonstr_vilki(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Год выпуска</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={god_vypuska}
                                        onChange={(e) => setgod_vypuska(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Страна пр-ва</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder='Страна пр-ва'
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                {/* Материал */}
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Материал</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={material}
                                        onChange={(e) => setmaterial(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                
                                
                                
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Диаметр колеса</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={diametre}
                                        onChange={(e) => setdiametre(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Тормоз</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={tormoz}
                                        onChange={(e) => settormoz(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='country'>
                                    <Form.Label>Вес</Form.Label>
                                    <br/>
                                    <Form.Control
                                        style={{padding: '10px', width: '100%', borderColor: 'green', borderRadius: '7px'}}
                                        // type='number'
                                        type='text'
                                        placeholder=''
                                        value={ves}
                                        onChange={(e) => setves(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                

                                {/* TRUEFALSE */}
                                <>
                                    <Grid item xs={12} xl={6}>
                                        <Form.Group className="mb-3" controlId='da'>
                                            <Form.Switch
                                                onChange={onNaduvnyeKolesa}
                                                id="custom-switch"
                                                label="Надувные колеса?"
                                                checked={naduvnye_kolesa}
                                            />
                                        </Form.Group>
                                    </Grid>
                                    
                                </>
                            </>
                        }
                        </>


                        <p style={{color: 'red'}}>{errors === null ? null : <p style={{color: 'red'}}>{errors}</p> }</p>
                        <p style={{color: 'green'}}>{loading === false ? null : <p style={{color: 'green'}}>Загрузка ...</p> }</p>
                        <Button
                            style={{padding: '10px', backgroundColor: 'green', width: '100%', color: '#ffffff', borderRadius: '7px', marginTop: '30px'}}
                            type='submit' variant='primary'
                        >
                            Добавить
                        </Button>
                    </Form>
                </Grid>
                <Grid item xs={12} xl={6}>
                    <SimpleBlogCard
                        image={newImg}
                        title={title}
                        description={description}
                        action={{
                            type: "internal",
                            route: "#",
                            color: "info",
                            label: `${price?.toString()} тг`
                    }}
                    />
                </Grid>
            </Grid>
        </DashboardLayout>
    );
}

export default ProductAdd;
