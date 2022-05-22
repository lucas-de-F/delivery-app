export default function vefiryStatus(s) {
  if (s.includes('Pendente')) {
    return 'status-pendente';
  }
  if (s.includes('Preparando')) {
    return 'status-preparando';
  }
  if (s.includes('Entregue')) {
    return 'status-entrege';
  }

  return 'status-transito';
}
