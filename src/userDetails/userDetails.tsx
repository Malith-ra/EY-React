import { useParams } from "react-router-dom"

export default function UniqueUserDetails() {

    const { id } = useParams()



    return (
        <>
            <body>
                <div>Div 1</div>
                <div>Div 2</div>
                <div>Div 3</div>
                </body></>
    )

}