
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
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { useDispatch } from "react-redux";
import { setPid } from "slices/navSlice";
import { setFace } from "slices/persSlice";


function ProductAddAll() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    // const samokatGo = () => {
    //     console.log('pressed')
    //     dispatch(setFace('samokat'))
    //     navigate('products/add')
    // }


  return (
    <DashboardLayout>
      <DashboardNavbar />
        <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                    <a href={'products/add?p=samokaty'} className="mButton">
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
                    <button className="mButton">
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
                    </button>
                </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                    <button className="mButton">
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
                    </button>
                </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                    <button className="mButton">
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
                    </button>
                </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                    <button className="mButton">
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
                    </button>
                </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                    <button className="mButton">
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
                    </button>
                </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                    <button className="mButton">
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
                    </button>
                </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                    <button className="mButton">
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
                    </button>
                </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                    <button className="mButton">
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
                    </button>
                </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                    <button className="mButton">
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
                    </button>
                </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                    <button className="mButton">
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
                    </button>
                </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                    <button className="mButton">
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
                    </button>
                </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                    <button className="mButton">
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
                    </button>
                </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <MDBox mb={1.5}>
                    <button className="mButton">
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
                    </button>
                </MDBox>
            </Grid>
        </Grid>
      {/* игвей  */}
    </DashboardLayout>
  );
}

export default ProductAddAll;
