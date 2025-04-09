# Proyecto Frontend de personas 

## Ejecutar el proyecto

```bash
npm run dev
```

## User tipografías en el proyecto
```tsx
      <h1 className="text-4x1 font-LexendDeca-Black text-blue-400" >Hola Mundo</h1>
      <h1 className="text-4x1 font-LexendDeca-Bold text-blue-400" >Hola Mundo</h1>
      <h1 className="text-4x1 font-LexendDeca-ExtraBold text-blue-400" >Hola Mundo</h1>
      <h1 className="text-4x1 font-LexendDeca-Light text-blue-400" >Hola Mundo</h1>
      <h1 className="text-4x1 font-LexendDeca-Medium text-blue-400" >Hola Mundo</h1>
      <h1 className="text-4x1 font-LexendDeca-Regular text-blue-400" >Hola Mundo</h1>
```
## Corregiendo la pagina de HomePage 4 de abril

```tsx 
  const [isLoading, setIsLoading] = useState(true)

  //28 de marzo 
  useEffect(() => {
    const getData = async () => {
      const result = await countsAction();

      setData(result)
    }

    getData()
  }, []);

  if(isLoading){
    return <Loader/>
  }

  console.log(data);
  //const response = await countsAction();
    return (
      //25 de marzo
      <div>
      <Title text="Pagina de Inicio"/>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dashboard 
        title="Paises"
        countValue={data?.data?.countriesCount || 0}
        icon={<Globe size={48} />}
        />

        {/* Para la personas */}
        <Dashboard 
        title="Personas"
        countValue={data?.data?.personsCount || 0}
        icon={<Users size={48} />}
        />
      </div>
      </div>
    )
```