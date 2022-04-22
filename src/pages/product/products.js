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
// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { useEffect, useState } from "react";
import MDAvatar from "components/MDAvatar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPid } from "slices/navSlice";
import { setFace } from "slices/persSlice";


function Products() {
  
  const { columns: pColumns, rows: pRows } = projectsTableData();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [orders, setOrders] = useState([])

  // Orders /////// //////////////////////
  const getOrders = async () => {
    try {
        setLoading(true)
        const response = await axios.get(`http://185.125.90.121/api/v1/products/list/`)
        .then(res => {
            const orders = res.data;
            // console.log(`orders =`, orders)
            setOrders(orders)
            setLoading(false)
            setErrors(null)
        })
    } catch (error) {
        setLoading(false)
        setOrders([])
        setErrors(error.message)
        console.log(`error data =`, error)
    }
  }

  useEffect(() => {
    getOrders();
  }, [])


  console.log('orders', orders)

  const { columns, rows } = authorsTableData();

  const DisplayData=orders.map(
    (o)=>{
        return(
            <tr key={o.id.toString()}>
                <td><MDAvatar src={o.image} size="sm" /></td>
                <td><MDTypography display="block" variant="caption" color="text" fontWeight="medium">
                  {o.title}
                </MDTypography>
                </td>
                <td>
                <MDTypography variant="caption">{o.description.substring(0, 57) + "..."}
                </MDTypography>
                </td>
                <td style={{paddingLeft: '20px'}}><MDTypography style={{color: 'green'}} display="block" variant="caption" color="text" fontWeight="medium">
                  {o.price} тг
                </MDTypography>
                </td>
                <td style={{paddingLeft: '20px'}}><MDTypography display="block" variant="caption" color="text" fontWeight="medium">
                    {o.category?.title}
                  </MDTypography>
                </td>
                <td style={{paddingLeft: '20px'}}>
                  <MDTypography component="a" href={'products/' + o.id} variant="caption" style={{color: 'blue'}} fontWeight="medium">
                    Редактировать
                  </MDTypography>
                </td>
            </tr>
        )
    }
  )

    const [showad, setShowad] = useState(false)

    const dispatch = useDispatch()

    const navigate = useNavigate()

  const samokatGo = () => {
        console.log('pressed')
        dispatch(setFace('samokat'))
        navigate('products/add')
  }

  const toggleshow = () => setShowad(previousState => !previousState);


  return (
    <DashboardLayout>
      <DashboardNavbar />
      {showad? 
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
              <a href="products/add/samokaty" className="mButton">
                <ComplexStatisticsCard
                    icon="leaderboard"
                    title="Cамокаты, скейт борды"
                    count=""
                    percentage={{
                    color: "success",
                    amount: "+ Добавить",
                    label: "Самокаты.",
                    }}
                />
              </a>
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
                <a href="products/add/tolokars" className="mButton">
                    <ComplexStatisticsCard
                        icon="leaderboard"
                        title="Толокары"
                        count=""
                        percentage={{
                        color: "success",
                        amount: "+ Добавить",
                        label: "Толокары",
                        }}
                    />
                </a>
            </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
                <a href="products/add/stulchikikormlenya" className="mButton">
                    <ComplexStatisticsCard
                        icon="leaderboard"
                        title="Стульчики кормл."
                        count=""
                        percentage={{
                        color: "success",
                        amount: "+ Добавить",
                        label: "Стульч. кормл.",
                        }}
                    />
                </a>
            </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
                <a href="products/add/party" className="mButton">
                    <ComplexStatisticsCard
                        icon="leaderboard"
                        title="Парты"
                        count=""
                        percentage={{
                        color: "success",
                        amount: "+ Добавить",
                        label: "Парты",
                        }}
                    />
                </a>
            </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
                <a href="products/add/shezlongi" className="mButton">
                    <ComplexStatisticsCard
                        icon="leaderboard"
                        title="Шезлонги"
                        count=""
                        percentage={{
                        color: "success",
                        amount: "+ Добавить",
                        label: "Шезлонги",
                        }}
                    />
                </a>
            </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
                <a href="products/add/molberty" className="mButton">
                    <ComplexStatisticsCard
                        icon="leaderboard"
                        title="Мольберты"
                        count=""
                        percentage={{
                        color: "success",
                        amount: "+ Добавить",
                        label: "Мольберты",
                        }}
                    />
                </a>
            </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
                <a href="products/add/kacheli" className="mButton">
                    <ComplexStatisticsCard
                        icon="leaderboard"
                        title="Качели"
                        count=""
                        percentage={{
                        color: "success",
                        amount: "+ Добавить",
                        label: "Качели",
                        }}
                    />
                </a>
            </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
                <a href="products/add/khodunki" className="mButton">
                    <ComplexStatisticsCard
                        icon="leaderboard"
                        title="Ходунки"
                        count=""
                        percentage={{
                        color: "success",
                        amount: "+ Добавить",
                        label: "Ходунки",
                        }}
                    />
                </a>
            </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
                <a href="products/add/electrocars" className="mButton">
                    <ComplexStatisticsCard
                        icon="leaderboard"
                        title="Электрмобили"
                        count=""
                        percentage={{
                        color: "success",
                        amount: "+ Добавить",
                        label: "Электрмобили",
                        }}
                    />
                </a>
            </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
                <a href="products/add/kolyaski" className="mButton">
                    <ComplexStatisticsCard
                        icon="leaderboard"
                        title="Коляски"
                        count=""
                        percentage={{
                        color: "success",
                        amount: "+ Добавить",
                        label: "Коляски",
                        }}
                    />
                </a>
            </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
                <a href="products/add/hyroskooters" className="mButton">
                    <ComplexStatisticsCard
                        icon="leaderboard"
                        title="Гироскутеры"
                        count=""
                        percentage={{
                        color: "success",
                        amount: "+ Добавить",
                        label: "Гироскутеры",
                        }}
                    />
                </a>
            </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
                <a href="products/add/sigways" className="mButton">
                    <ComplexStatisticsCard
                        icon="leaderboard"
                        title="Сигвей"
                        count=""
                        percentage={{
                        color: "success",
                        amount: "+ Добавить",
                        label: "Сигвей",
                        }}
                    />
                </a>
            </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
                <a href="products/add/bikes" className="mButton">
                    <ComplexStatisticsCard
                        icon="leaderboard"
                        title="Велосипеды"
                        count=""
                        percentage={{
                        color: "success",
                        amount: "+ Добавить",
                        label: "Велосипеды",
                        }}
                    />
                </a>
            </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={1.5}>
                <a href="products/add/all" className="mButton">
                    <ComplexStatisticsCard
                        icon="leaderboard"
                        title="Другой товар, с универсальными параметрами"
                        count=""
                        percentage={{
                        color: "success",
                        amount: "+ Добавить",
                        label: "С другими параметрами",
                        }}
                    />
                </a>
            </MDBox>
        </Grid>
        <a style={{
                width: '30px',
                height: '30px',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'blue',
                borderRadius: '15px',
                position: 'absolute',
                top: '500px',
                left: '90%',
                zIndex: '111111111'
            }}
            onClick={() => toggleshow()}
            >
                <h3 style={{color: '#fff', textAlign: 'center', marginTop: '-5px'}}>-</h3>
            </a>
      </Grid>
      :
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Товары
                </MDTypography>
              </MDBox>
                <p>{errors === null? null : <p style={{color: 'red'}}>{errors}</p>}</p>
                <p>{loading? <p style={{color: 'green'}}>Идет загрузка ..</p>: null}</p>
      
              <MDBox pt={3}>
                {/* <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />  */}
                <div style={{paddingLeft: '10px', paddingRight: '10px'}}>
                  <table class="table table-striped">
                      <thead>
                          <tr>
                          <th style={{fontSize: '13px'}}>Ф</th>
                          <th style={{width: '200px', textAlign: 'left', fontSize: '13px'}} >Название</th>
                          <th style={{textAlign: 'left',fontSize: '13px'}}>Описание</th>
                          <th style={{textAlign: 'left', fontSize: '13px', paddingLeft: '20px'}}>Цена</th>
                          <th style={{textAlign: 'left', fontSize: '13px', paddingLeft: '20px'}}>Категория</th>
                          <th style={{textAlign: 'left', fontSize: '13px', paddingLeft: '20px'}}>Редактировать/Удалить</th>
                        
                        </tr>
                      </thead>
                      <tbody>
                      
                          
                          {DisplayData}
                          
                      </tbody>
                  </table>
                  
                </div>
              </MDBox>
            </Card>
          </Grid>
          <a style={{
                width: '30px',
                height: '30px',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'blue',
                borderRadius: '15px',
                position: 'absolute',
                top: '500px',
                left: '90%',
                zIndex: '111111111'
            }}
            onClick={() => toggleshow()}
            >
                <h3 style={{color: '#fff', textAlign: 'center', marginTop: '-5px'}}>+</h3>
            </a>
          
        </Grid>
      </MDBox>
      }
    </DashboardLayout>
  );
}

export default Products;