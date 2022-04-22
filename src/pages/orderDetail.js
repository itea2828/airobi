
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import axios from 'axios';
// import BASE_URL from 'utils/baseUrl';
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
import Bill from "layouts/billing/components/Bill";


function OrderDetail() {
  
    const navigate = useNavigate();
    const params = useParams();

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [order, setOrder] = useState({})

    const [isPaid, setIsPaid] = useState(false)

    const [isDelivered, setIsDelivered] = useState(false)


    const togglePay = () => setIsPaid(previousState => !previousState);

    const toggleDelivered = () => setIsDelivered(previousState => !previousState) + putDeliveredProduct();

  // Orders /////// //////////////////////
  const getOrder = async () => {
    const token = localStorage.getItem("token")

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    try {
        setLoading(true)
        const response = await axios.get(`http://185.125.90.121/api/v1/orders/${params.id}/`, config)
        .then(res => {
            const o = res.data;
            // console.log(`orders =`, orders)
            setOrder(o)
           
            setIsPaid(o.isPaid)
            setIsDelivered(o.isDelivered)

            setLoading(false)
            setErrors(null)
        })
    } catch (error) {
        setLoading(false)
        setOrder({})
        setErrors(error.message)
        console.log(`error data =`, error)
    }
  }



  useEffect(() => {
    getOrder();
  }, [])

    

//   UPDATE 
    // Товары /////// //////////////////////
    const putPaidProduct = async (e) => {
        e.preventDefault()
        try {

            let formData = new FormData();
            formData.append("user", 3);

            const token = localStorage.getItem("token")

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                }
            }

            setLoading(true)
            // console.log(`user`, user)
            const response = await axios.put(`http://185.125.90.121/api/v1/orders/${params.id}/paid/`, formData, config)
            .then(res => {
                const productUpdated = res.data;
                console.log(`productUpdated =`, productUpdated)
                
                setLoading(false)
            
                setErrors(null)
                navigate("/billing");
                // navigate(ADMIN_PRODUCT_LIST)
            }).catch((err) => {
                setErrors(err.message)
                console.log(`err ===`, err.message)
            })
        } catch (error) {
            setLoading(false)
            // setErrors(error)
            console.log(`error data =`, error)
        }
        
    }

    const putDeliveredProduct = async (e) => {
        e.preventDefault()
        try {

            let formData = new FormData();
            formData.append("user", 3);

            const token = localStorage.getItem("token")

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                }
            }

            setLoading(true)
            // console.log(`user`, user)
            const response = await axios.put(`http://185.125.90.121/api/v1/orders/admin/${params.id}/deliver/`, formData, config)
            .then(res => {
                const productUpdated = res.data;
                console.log(`productUpdated =`, productUpdated)
                
                setLoading(false)
            
                setErrors(null)
                navigate("/billing");
                // navigate(ADMIN_PRODUCT_LIST)
            }).catch((err) => {
                setErrors(err.message)
                console.log(`err ===`, err.message)
            })
        } catch (error) {
            setLoading(false)
            // setErrors(error)
            console.log(`error data =`, error)
        }
        
    }

    const deleteProduct = async () => {
        try {
            const token = localStorage.getItem("token")
    
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
    
            setLoading(true)
            // console.log(`user`, user)
            const response = await axios.delete(`http://185.125.90.121/api/v1/orders/admin/${params.id}/delete/`, config)
            .then(res => {
                // const productUpdated = res.data;
                console.log(`product Deleted !`)
                
                setLoading(false)
               
                setErrors(null)
                navigate("/billing");
                // navigate(ADMIN_PRODUCT_LIST)
            }).catch((err) => {
                setErrors(err.message)
                console.log(`err ===`, err.message)
            })
        } catch (error) {
            setLoading(false)
            // setErrors(error)
            console.log(`error data =`, error)
        }
        
    }
    
    console.log('order', order)
  return (
    <DashboardLayout>
      <DashboardNavbar />
        <Grid container spacing={3}>
            <Grid item xs={12} xl={6}>
                <Card id="delete-account">
                <MDBox pt={3} px={2}>
                    <MDTypography variant="h6" fontWeight="medium">
                    Информация о заказе
                    </MDTypography>
                </MDBox>
                <MDBox pt={1} pb={2} px={2}>
                    <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
                    <Bill
                        name={order.user?.name}
                        email={order.user?.email}
                        company={order.city}
                        vat={'ул.' + order.street + ', дом: ' + order.homeNumber + ', кв: ' + order.kv + ', тел: ' + order.phoneNumber}
                    />
                    <MDTypography style={{color: 'green', fontSize: '14px', fontWeight: '700'}}>Общая сумма: {order.totalPrice} тг</MDTypography>
                    <MDTypography style={{color: '#333', fontSize: '14px', fontWeight: '700'}}>Товары в заказе:</MDTypography>
                    {order.orderItems?.map((i) => (
                        <MDTypography style={{color: '#333', fontSize: '14px', fontWeight: '700'}}>{i.title}, {i.qty} шт. * {i.price} тг.</MDTypography>
                    ))}
                    </MDBox>
                    <MDTypography style={{fontSize: '14px',}}>{order.phoneNumber}</MDTypography>
                    {order.isDelivered?
                    <MDTypography style={{fontSize: '14px', color: 'green'}}>Статус: Доставлен</MDTypography>
                    :
                    <MDTypography style={{fontSize: '14px', color: 'red'}}>Статус: Не доставлен</MDTypography>
                    }
                </MDBox>
                </Card>
                <button style={{padding: '10px', width: '100%', backgroundColor: 'red', color: '#fff'}} onClick={() => deleteProduct()}>Удалить</button>
            </Grid>
            <Grid item xs={12} xl={6}>
                <Form onSubmit={putPaidProduct}>

                    <Form.Group className="mb-3" controlId='da'>
                        {/* <Form.Label>Хит продажи?</Form.Label> */}
                        {/* <br/> */}
                        <Form.Switch
                            onChange={togglePay}
                            id="custom-switch"
                            label="Оплачен ? " 
                            checked={isPaid}
                            disabled={isPaid? true: false} // apply if you want the switch disabled
                        />
                        <Button
                            style={{padding: '5px', backgroundColor: 'green', width: '100%', color: '#ffffff', borderRadius: '7px', marginTop: '10px', marginBottom: '20px'}}
                            type='submit' variant='primary'
                        >
                            Оплачен
                        </Button>
                    </Form.Group>
                    <p style={{color: 'red'}}>{errors === null ? null : <p style={{color: 'red'}}>{errors}</p> }</p>
                    <p style={{color: 'green'}}>{loading === false ? null : <p style={{color: 'green'}}>Загрузка ...</p> }</p>
                    
                </Form>
                <Form onSubmit={putDeliveredProduct}>

                    <Form.Group className="mb-3" controlId='da'>
                        {/* <Form.Label>Хит продажи?</Form.Label> */}
                        {/* <br/> */}
                        <Form.Switch
                            onChange={toggleDelivered}
                            id="custom-switch"
                            label="Доставлен ? "
                            checked={isDelivered}
                            disabled={isDelivered? true: false}
                            // disabled // apply if you want the switch disabled
                        />

                        <Button
                            style={{padding: '5px', backgroundColor: 'green', width: '100%', color: '#ffffff', borderRadius: '7px', marginTop: '10px'}}
                            type='submit' variant='primary'
                        >
                            Доставлен
                        </Button>
                    </Form.Group>
                    <p style={{color: 'red'}}>{errors === null ? null : <p style={{color: 'red'}}>{errors}</p> }</p>
                    <p style={{color: 'green'}}>{loading === false ? null : <p style={{color: 'green'}}>Загрузка ...</p> }</p>
                    
                </Form>
            </Grid>
            
        </Grid>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default OrderDetail;
