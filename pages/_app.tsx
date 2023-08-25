import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack';
import { useEffect, useState } from 'react';
import { MarkerZoom } from '../interfaces/map';
import { Root } from '../interfaces/tiendas';
import { MyStoresGlobalContext } from '../interfaces/redux/stores-context';
import { MyMarkerGlobalContext } from '../interfaces/redux/storemarker-context';
export default function App({ Component, pageProps }: AppProps) {

  const [marker, setMarker] = useState<MarkerZoom>({
    name: "",
    zoom: 12,
  })
  const [arrayStores, setArrayStores] = useState<Root>({
    ruta: undefined,
    tiendas: []
  })

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/rutas/today/1`)
      .then(response => response.json())
      .then(data => {
        setArrayStores(data)
      })
      .catch(error => {
        /* alert("No hay tiendas, registrar porfavor") */
        console.error(error);
      });
  }, [])

  return (
    <SnackbarProvider maxSnack={3}>
      <MyStoresGlobalContext.Provider value={{ arrayStores, setArrayStores }}>
        <MyMarkerGlobalContext.Provider value={{ marker, setMarker }}>
          <Component {...pageProps} />
        </MyMarkerGlobalContext.Provider>
      </MyStoresGlobalContext.Provider>
    </SnackbarProvider>
  )
}
