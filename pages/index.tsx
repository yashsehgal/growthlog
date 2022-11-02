import { useEffect } from 'react';
import HomeView from '../components/HomeView';

export default function Home() {
  useEffect(() => {
    window.matchMedia(`(prefers-color-scheme: ${localStorage.getItem("theme")})`).matches;
  });
  return (
    <HomeView />
  )
}
