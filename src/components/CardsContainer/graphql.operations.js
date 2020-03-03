import gql from 'graphql-tag';

export const getDevices = gql`
  query GetDevices {
    allDevices {
      id
      name
      status
    }
  }
`;

export const onDeviceUpdate = gql`
  subscription OnDeviceUpdate {
    onDeviceUpdate {
      id
      status
    }
  }
`;
