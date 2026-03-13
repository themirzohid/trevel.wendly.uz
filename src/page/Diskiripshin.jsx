import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import instance from "../ouil/axios";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
 
export function HorizontalCard() {

    let {id} = useParams()

    async function get() {
    let res = await instance.get(`/Mashinasalon/${id}`)
    return res.data
    }

      let { isLoading, error, data } = useQuery({
        queryKey: ["pro"],
        queryFn: get,
      });

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>{error.message}</h1>;

  return (
    <Card className="w-full max-w-[48rem] flex-row mt-10 mx-10">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={data.img}
          alt="card-image"
          className="h-96 w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {data.countiris}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {data.pirce}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {data.idea}
        </Typography>
        <a href="#" className="inline-block">
         <Link to={'/'} >
          <Button variant="text" className="flex items-center gap-2">
            exit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
         </Link>
        </a>
      </CardBody>
    </Card>
  );
}