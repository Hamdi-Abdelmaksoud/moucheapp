import AddData from "@/components/backend/AddData"
import ServiceForm from "@/components/backend/ServiceForm"

export default function Admin(){
  return(
    <div className="flex flex-col gap-10">

      <AddData />
      <ServiceForm />
    </div>
  ) 
}