import {
  Card,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import instance from "../ouil/axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export function CardDefault() {
  async function fetchProducts() {
    let res = await instance.get("/Mashinasalon");
    return res.data;
  }

  let { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen bg-[#F3E5F5]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#6A1B9A]"></div>
      </div>
    );

  if (error)
    return (
      <h1 className="text-center text-red-500 mt-10">
        Xatolik: {error.message}
      </h1>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
    gap-10 p-5 md:p-10 lg:p-20 bg-[#F3E5F5] min-h-screen">

      {data?.map((product) => (
        <Card
          key={product.id}
          className="relative h-[30rem] w-full overflow-hidden 
          transition-all duration-300 hover:scale-[1.02] group cursor-pointer rounded-2xl shadow-xl"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none 
            bg-cover bg-center transition-transform duration-500 
            group-hover:scale-110"
            style={{ backgroundImage: `url(${product.img})` }}
          >
            <div className="absolute inset-0 h-full w-full 
            bg-gradient-to-t from-[#6A1B9A]/90 via-black/40 to-transparent" />
          </CardHeader>

          <div className="relative flex flex-col justify-end h-full p-6 text-white">
            
            <div className="backdrop-blur-md bg-white/20 p-4 
            rounded-xl border border-white/30 mb-4">
              
              <Typography variant="h4" className="font-bold mb-1 text-white">
                {product.countries}
              </Typography>

              <div className="flex justify-between items-center mt-2">
                <Typography className="text-white font-medium tracking-wider">
                  {product.turfirama || "Wanderly Tour"}
                </Typography>
                <Typography className="text-white-[#EC407A]  font-bold text-xl">
                  ${product.price}
                </Typography>
              </div>
            </div>

            <Link to={`/malumot/${product.id}`}>
              <Button
                size="lg"
                className="bg-[#EC407A] text-white hover:bg-pink-600 
                transition-all duration-300 active:scale-95 
                rounded-lg shadow-lg w-full"
              >
                Batafsil
              </Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}