import { Header } from "../../components/Header"
import { TodoSections } from "../../components/sections/TodoSections"

export const HomePage = () => {
    return (
        <>
            <Header />
            <main className="container">
                <TodoSections />
            </main>
        </>
    )
}
