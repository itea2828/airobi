/**
=========================================================
* Airobike React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Airobike React components
import MDBox from "components/MDBox";

// Airobike React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [orders, setOrders] = useState([])

  // Orders /////// //////////////////////
  const getOrders = async () => {
    try {
        const token = localStorage.getItem("token")

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            }
        }


        setLoading(true)
        const response = await axios.get(`http://185.125.90.121/api/v1/orders/list/`, config)
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

  const [products, setProducts] = useState([])
  const getProducts = async () => {
    try {
      const token = localStorage.getItem("token")

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            }
        }
        setLoading(true)
        const response = await axios.get(`http://185.125.90.121/api/v1/products/list/`, config)
        .then(res => {
            const orders = res.data;
            // console.log(`orders =`, orders)
            setProducts(orders)
            setLoading(false)
            setErrors(null)
        })
    } catch (error) {
        setLoading(false)
        setProducts([])
        setErrors(error.message)
        console.log(`error data =`, error)
    }
  }

  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    try {
      const token = localStorage.getItem("token")

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            }
        }
        setLoading(true)
        const response = await axios.get(`http://185.125.90.121/api/v1/categories/list/`, config)
        .then(res => {
            const orders = res.data;
            // console.log(`orders =`, orders)
            setCategories(orders)
            setLoading(false)
            setErrors(null)
        })
    } catch (error) {
        setLoading(false)
        setCategories([])
        setErrors(error.message)
        console.log(`error data =`, error)
    }
  }


  const [users, setUsers] = useState([])
  const getUsers = async () => {
    try {
      const token = localStorage.getItem("token")

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            }
        }
        setLoading(true)
        const response = await axios.get(`http://185.125.90.121/api/v1/users/`, config)
        .then(res => {
            const orders = res.data;
            // console.log(`orders =`, orders)
            setUsers(orders)
            setLoading(false)
            setErrors(null)
        })
    } catch (error) {
        setLoading(false)
        setUsers([])
        setErrors(error.message)
        console.log(`error data =`, error)
    }
  }

  useEffect(() => {
    getOrders();
    getProducts();
    getCategories();
    getUsers();
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <p>{errors === null? null : <p style={{color: 'red'}}>{errors}</p>}</p>
      <p>{loading? <p style={{color: 'green'}}>Идет загрузка ..</p>: null}</p>
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Заказов"
                count={orders?.length}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Кол-во заказов",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Товары"
                count={products?.length}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "кол-во товаров",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Категории"
                count={categories?.length}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Категории",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Пользователи"
                count={users?.length}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Пользователи",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Продажи за год"
                  description="Платеж не подключен"
                  date="Всего"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Продажи за день"
                  description={
                    <>
                      (<strong>Платеж</strong>) не подключен.
                    </>
                  }
                  date="За день"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Продажи за неделю"
                  description="Платеж не подключe"
                  date="За неделю"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        {/* <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox> */}
      </MDBox>
      {/* <Footer />  */}
    </DashboardLayout>
  );
}

export default Dashboard;
