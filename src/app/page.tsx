import MainSlider from "@/components/main/main.slider";
import { Container } from "@mui/material";
import { sendRequest } from "@/utlis/api";
export default async function HomePage() {

  const chill = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: 'POST',
    body: { category: 'CHILL', limit: 10 }
  })

  const workout = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: 'POST',
    body: { category: 'WORKOUT', limit: 10 }
  })

  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: 'POST',
    body: { category: 'PARTY', limit: 10 }
  })

  return (
    <Container>
      <MainSlider
        title={"TOP CHILL"}
        data={chill?.data ?? []} />
      <MainSlider
        title={"TOP WORKOUT"}
        data={workout?.data ?? []} />
      <MainSlider
        title={"TOP PARTY"}
        data={party?.data ?? []} />
    </Container>
  )
}
