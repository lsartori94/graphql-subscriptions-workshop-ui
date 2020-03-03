import React, { useState, useEffect } from 'react';
import { useQuery, useSubscription } from '@apollo/react-hooks';
import * as Styled from './styles';
import Card from '../Card';
import { getDevices, onDeviceUpdate } from './graphql.operations';

export default function CardsContainer() {
  const { data: { allDevices = [] } = {}, loading, error } = useQuery(
    getDevices
  );

  const {
    data: { onDeviceUpdate: deviceUpdated } = {},
    loading: loadingSubscription
  } = useSubscription(onDeviceUpdate);

  // When first devices are loaded
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    setDevices(allDevices);
  }, [allDevices]);

  // In order to handle the update of devices
  useEffect(() => {
    if (deviceUpdated && !loadingSubscription)
      setDevices(prevDevices =>
        prevDevices.map(device =>
          device.id === deviceUpdated.id
            ? { ...device, status: deviceUpdated.status }
            : device
        )
      );
  }, [deviceUpdated, loadingSubscription]);

  if (loading) return 'waiting...';
  if (error) return 'error...';

  return (
    <Styled.Container>
      {devices.map(cardInfo => (
        <Card {...cardInfo} key={cardInfo.id} />
      ))}
    </Styled.Container>
  );
}
