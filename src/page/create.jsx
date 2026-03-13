import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import instance from "../ouil/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { data, useNavigate } from "react-router-dom";
 
export function Create() {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  
  let nav = useNavigate()

  async function queryCreate(product) {
    let res = await instance.post   ("/Mashinasalon", product)
    return res.data
  }

  let usemutet = useMutation({
    mutationFn:queryCreate , 
    onSuccess:() => {
         toast.success('post zapros')
        nav('/')
    }
  })

  const onSubmit = (data) => {
    usemutet.mutate(data)
  }


  return (
     <Card color="transparent" shadow={false} className="">
      <Typography variant="h4" color="blue-gray">
        Create
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Cauntiris
          </Typography>
          <Input
           {...register ('countries')}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Idea
          </Typography>
          <Input
            {...register ("idea")}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Turfirma
          </Typography>
          <Input
            {...register ("turfirama")}
            type="text"
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Price
          </Typography>
          <Input
          {...register ("price")}
            type="text"
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Img URL
          </Typography>
          <Input
          {...register ("img")}
            type="text"
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button type="submit" className="mt-6" fullWidth>
          sign up
        </Button>
        
      </form>
    </Card>
  );
}