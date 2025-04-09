import { Routes, Route } from "react-router";
import { Navbar } from "../components/layout/Navbar";
import { HomePage } from "../pages/home/HomePage";
import { CountriesPage } from "../pages/countries/CoutriesPage";
import { PersonsPage } from "../pages/persons/PersonsPage";

export const AppRouter = () => {

    return(
        <div className="min-h-screen bg-gray-100">

        <Routes>
            <Route element={<Navbar />}>

        <Route path="/" element={<HomePage/>} />
        <Route path="/countries" element={<CountriesPage/>} />
        <Route path="/persons" element={<PersonsPage/>} />
            
            </Route>

        </Routes>

        </div>
    );
}

