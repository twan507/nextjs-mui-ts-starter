'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { Box } from "@mui/material";
import Button from "@mui/material/Button/Button";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import Link from "next/link";

interface IProp {
    title: string,
    data: ITrackTop[]
}

const MainSlider = (props: IProp) => {
    const { data, title } = props
    console.log(data)

    const NextArrow = (props: any) => {
        return (
            <Button color="inherit" variant="contained"
                onClick={props.onClick}
                sx={{
                    position: "absolute",
                    right: -40,
                    top: "25%",
                    zIndex: 2,
                    minWidth: 30,
                    width: 35,
                }}
            >
                <ChevronRightIcon />
            </Button>
        )
    }

    const PrevArrow = (props: any) => {
        return (
            <Button color="inherit" variant="contained"
                onClick={props.onClick}
                sx={{
                    position: "absolute",
                    left: -40,
                    top: "25%",
                    zIndex: 2,
                    minWidth: 30,
                    width: 35,
                }}
            >
                <ChevronLeftIcon />
            </Button>
        )
    }

    const settings: Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (

        <Box
            sx={{
                margin: "0 50px",
                ".abc": {
                    padding: "0 10px"
                },
                "img": {
                    height: 150,
                    width: 150
                },
                "h3": {
                    border: "1px solid #ccc",
                    padding: "20px",
                    height: "200px",

                }
            }}
        >
            <h2> {title} </h2>

            <Slider {...settings}>
                {data.map(track => {
                    return (
                        <div className="track" key={track._id}>
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${track.imgUrl}`} />
                            <Link href={`/track/${track._id}`}>
                                <h4>{track.title}</h4>
                                <h5>track.description</h5>
                            </Link>
                        </div>
                    )
                })}
            </Slider>
            <Divider />
        </Box>

    );
}

export default MainSlider;