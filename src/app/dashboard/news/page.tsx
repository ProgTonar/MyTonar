
import { getNewsRoutes } from "@/services/getNewsService"
import NewsDashboardClient from "./client"

const NewsDashboardPage = async () => {
    const news = await getNewsRoutes()
    return <NewsDashboardClient news={news}/>
}

export default NewsDashboardPage