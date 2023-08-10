import { utils, WorkBook, read } from 'xlsx';
import { Tienda } from "../../interfaces/tiendas"



export const Latitudlogitud = (store: any) => {

    const workbook: WorkBook = read(target.result);

    const data: Tienda[] = utils.sheet_to_json(workbook.Sheets[sheet[0]], { raw: false });
    const latitud: Tienda[] = store.latitud ? store.latitud.split(",")[0] : ""
    const longitud = store.latitud ? store.latitud.split(",")[1] : ""


    console.log("latitud, longitud ==>", latitud, longitud)




    return (
        <>
        </>
    )
}
