import { Container, Grid, Typography, Card, IconButton, Button, MenuItem, FormControl, Box, TextField, Autocomplete } from '@mui/material';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const Tiendas = () => {
    const top100Films = [
        { label: 'MADGALENA', year: 1994 },
        { label: '12OCTUBRE', year: 1972 },
        { label: 'AV.LURIN', year: 1972 },
    ]

    const [age, setAge] = React.useState('');
    const handleChange = (event: any) => {
        setAge(event.target.value);
    };
    return (
        <main>
            <header style={{ width: "100%", backgroundColor: "#A81B8D", padding: "25px 0px" }}>
                <div style={{ maxWidth: "1920px", /* backgroundColor: "yellow", */ display: "flex", margin: "auto", justifyContent: "center" }}>
                    <nav >
                        <ul style={{ /* backgroundColor: "green", */ display: "flex", gap: "1rem", color: "white" }}>
                            <li><a href="#" style={{ fontSize: "20px" }}>Insert Ruta</a></li>
                            <li><a href="#" style={{ fontSize: "20px" }}>Buscar tiendas</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <Container maxWidth={'sm'} sx={{/*  backgroyundColor: 'red',  */marginTop: "2rem" }}>
                <Grid sx={{ display: 'flex', justifyContent: "space-between", marginBottom: '25px' }}>
                    <Grid item>
                        <Typography>Ruta del día</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>07 de Agosto del 2023</Typography>
                    </Grid>
                </Grid>
                <Grid sx={{ marginBottom: '20px' }}>
                    <Typography>Seleccione su número de ruta</Typography>
                    <Card sx={{ paddingTop: '20px' }} >
                        <Box >
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Sellecione su ruta"
                                fullWidth
                                defaultValue="EUR"
                            >
                                <MenuItem>1</MenuItem>
                                <MenuItem>2</MenuItem>
                                <MenuItem>3</MenuItem>
                                <MenuItem>4</MenuItem>
                                <MenuItem>5</MenuItem>
                                <MenuItem>6</MenuItem>
                            </TextField>
                        </Box >
                    </Card>
                </Grid>
                <Grid>
                    <Typography
                        color={'#8F9CC0'}
                        marginBottom={'10px'}
                    >
                        Tiendas de la ruta
                    </Typography>
                    <Grid display={'flex'} flexDirection={'column'} gap={2}>
                        <Grid
                            container
                            spacing={2}
                            sx={{ display: "flex" }}>
                            <Grid item xs={5.5} sm={5.5}>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    renderInput={(params) => <TextField {...params} label="Seleccionar tienda" />}
                                />
                            </Grid>
                            <Grid item xs={5.5} sm={5.5}>
                                <TextField select label="Cantidad de jabas" fullWidth>
                                    <MenuItem value="cantidad-jabas">1</MenuItem>
                                    <MenuItem value="cantidad-jabas">2</MenuItem>
                                    <MenuItem value="Pasaporte">3</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={1} sm={1} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                justifyItems: 'center',
                                alignItems: 'center'
                            }}>
                                <IconButton sx={{
                                    padding: '4px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.6)',

                                }}>
                                    <DeleteIcon fontSize='large' color='error' />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={2}
                            sx={{ display: "flex" }}>
                            <Grid item xs={5.5} sm={5.5}>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    renderInput={(params) => <TextField {...params} label="Seleccionar tienda" />}
                                />
                            </Grid>
                            <Grid item xs={5.5} sm={5.5}>
                                <TextField select label="Cantidad de jabas" fullWidth>
                                    <MenuItem value="cantidad-jabas">1</MenuItem>
                                    <MenuItem value="cantidad-jabas">2</MenuItem>
                                    <MenuItem value="Pasaporte">3</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={1} sm={1} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                justifyItems: 'center',
                                alignItems: 'center'
                            }}>
                                <IconButton sx={{
                                    padding: '4px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.6)',

                                }}>
                                    <DeleteIcon fontSize='large' color='error' />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid sx={{
                        width: '100%',
                        marginTop: '10px'
                    }}>
                        <Button
                            variant="contained"
                            sx={{
                                width: '100%',
                                backgroundColor: '#6259CA', color: 'white',
                                fontFamily: 'Inter',
                                fontWeight: '600',
                            }}
                            startIcon={<AddIcon />}
                        >
                            <Typography
                                textTransform={'capitalize'}
                                fontFamily={'Inter'}
                                fontSize={16}
                                fontWeight={600}
                            >
                                Agregar
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </main >
    )
}

export default Tiendas;