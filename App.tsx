import { StatusBar } from 'expo-status-bar';
import { Login } from './src/pages/Login';
import { Routes } from './src/Routes';
import { Home } from './src/pages/home';

export default function App() {
  return (
    <>
      <StatusBar style= "auto" />
      <Routes/>
    </>
  );
};