import { Globe, Users } from "lucide-react"
import { Title } from "../../components/shared/Title"
import { Dashboard } from "../../components/Home/DashboardCard"
import { Loader } from "../../components/shared/Loader"
import { UseStatistics } from "../../presentation/hooks/useStatistics"

export const HomePage = () => {
  const { data, isLoading } = UseStatistics();

  if(isLoading) {
    return <Loader />
  }

  console.log(data);
  

  return (
    <div>
      <Title text="Página de Inicio" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dashboard
          title="Países"
          to="/countries/create"
          countValue={data?.data?.countriesCount || 0}
          icon={<Globe size={48} />}
        />

        <Dashboard
          title="Personas"
          to="/persons/create"
          countValue={data?.data?.personsCount || 0}
          icon={<Users size={48} />}
        />

      </div>
    </div>
  )


  }