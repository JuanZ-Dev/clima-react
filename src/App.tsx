import styles from "./App.module.css";
import Form from "./components/Form/Form";
import useWeather from "./hooks/useWeather";

function App() {
  const { weather, fetchWeather } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        <div>{weather.name}</div>
      </div>
    </>
  );
}

export default App;
