import React from 'react';
import {View} from 'react-native';
import Svg, {Path, G, Defs, Rect, ClipPath} from 'react-native-svg';
import {COLORS} from './constants/theme';

export const ArrowRightCircle = ({color}) => {
  return (
    <Svg width="26" height="26" viewBox="0 0 48 48" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 42.4994C37.874 42.4994 42.5 37.8734 42.5 23.9994C42.5 10.1254 37.874 5.49939 24 5.49939C10.126 5.49939 5.5 10.1254 5.5 23.9994C5.5 37.8734 10.126 42.4994 24 42.4994Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.1162 30.9427C21.1162 30.9427 28.0882 26.1587 28.0882 23.9987C28.0882 21.8387 21.1162 17.0587 21.1162 17.0587"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const User = ({tintColor, styles}) => {
  return (
    <Svg width="22" height="22" viewBox="0 0 48 48" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.9456 40.7364C17.4676 40.7364 11.9336 39.7564 11.9336 35.8324C11.9336 31.9084 17.4316 28.4924 23.9456 28.4924C30.4236 28.4924 35.9576 31.8764 35.9576 35.7984C35.9576 39.7204 30.4596 40.7364 23.9456 40.7364Z"
        stroke={tintColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.9452 22.8974C28.1972 22.8974 31.6452 19.4514 31.6452 15.1994C31.6452 10.9474 28.1972 7.49939 23.9452 7.49939C19.6932 7.49939 16.2451 10.9474 16.2451 15.1994C16.2332 19.4354 19.6532 22.8834 23.8912 22.8974H23.9452Z"
        stroke={tintColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M36.7246 20.7832C39.1986 20.1212 41.0226 17.8652 41.0226 15.1792C41.0226 12.3772 39.0366 10.0372 36.3926 9.49719"
        stroke={tintColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M37.8867 27.0887C41.3947 27.0887 44.3907 29.4667 44.3907 31.5907C44.3907 32.8407 43.3567 34.2027 41.7887 34.5707"
        stroke={tintColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.1682 20.7832C8.69216 20.1212 6.86816 17.8652 6.86816 15.1792C6.86816 12.3772 8.85616 10.0372 11.4982 9.49719"
        stroke={tintColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.004 27.0887C6.496 27.0887 3.5 29.4667 3.5 31.5907C3.5 32.8407 4.534 34.2027 6.104 34.5707"
        stroke={tintColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <View
        style={{
          width: 12,
          height: 12,
          position: 'absolute',
          top: -2.49,
          left: -2.75,
          zIndex: 1,
          borderRadius: 7,
          ...styles,
        }}></View>
    </Svg>
  );
};
export const InputSearch = () => {
  return (
    <Svg width="20px" height="20px" viewBox="0 0 20 20" fill="none">
      <Path
        d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
        stroke={COLORS.lighgray}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5 17.5L13.875 13.875"
        stroke={COLORS.lighgray}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const SearchUser = ({tintColor, styles}) => {
  return (
    <Svg width="26" height="26" viewBox="0 0 17 23" fill="none">
      <Path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M8.79341 22.1906C4.81541 22.1906 1.41699 21.5893 1.41699 19.18C1.41699 16.7707 4.79374 14.5997 8.79341 14.5997C12.7714 14.5997 16.1687 16.7501 16.1687 19.1583C16.1687 21.5666 12.7931 22.1906 8.79341 22.1906Z"
        stroke={COLORS.white}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.79316 11.1637C11.404 11.1637 13.5208 9.04684 13.5208 6.43601C13.5208 3.82518 11.404 1.70834 8.79316 1.70834C6.18233 1.70834 4.06546 3.82518 4.06546 6.43601C4.05575 9.03818 6.1585 11.155 8.75958 11.1637H8.79316Z"
        stroke={COLORS.white}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const Category = ({tintColor, styles}) => {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M42.001 13.3476C42.001 17.4048 38.7106 20.6952 34.6534 20.6952C30.5962 20.6952 27.3076 17.4048 27.3076 13.3476C27.3076 9.2904 30.5962 6 34.6534 6C38.7106 6 42.001 9.2904 42.001 13.3476Z"
        stroke={tintColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M20.6934 13.3476C20.6934 17.4048 17.4048 20.6952 13.3458 20.6952C9.2904 20.6952 6 17.4048 6 13.3476C6 9.2904 9.2904 6 13.3458 6C17.4048 6 20.6934 9.2904 20.6934 13.3476Z"
        stroke={tintColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M42.001 34.5239C42.001 38.5811 38.7106 41.8697 34.6534 41.8697C30.5962 41.8697 27.3076 38.5811 27.3076 34.5239C27.3076 30.4667 30.5962 27.1763 34.6534 27.1763C38.7106 27.1763 42.001 30.4667 42.001 34.5239Z"
        stroke={tintColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M20.6934 34.5239C20.6934 38.5811 17.4048 41.8697 13.3458 41.8697C9.2904 41.8697 6 38.5811 6 34.5239C6 30.4667 9.2904 27.1763 13.3458 27.1763C17.4048 27.1763 20.6934 30.4667 20.6934 34.5239Z"
        stroke={tintColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <View
        style={{
          width: 12,
          height: 12,
          position: 'absolute',
          top: -2.49,
          left: -2.75,
          zIndex: 1,
          borderRadius: 7,
          ...styles,
        }}></View>
    </Svg>
  );
};

export const ArrowUpCircle = ({tintColor, styles}) => {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M42.499 23.9998C42.499 10.1258 37.873 5.49976 23.999 5.49976C10.125 5.49976 5.49902 10.1258 5.49902 23.9998C5.49902 37.8738 10.125 42.4998 23.999 42.4998C37.873 42.4998 42.499 37.8738 42.499 23.9998Z"
        stroke={tintColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30.9424 26.8835C30.9424 26.8835 26.1584 19.9115 23.9984 19.9115C21.8384 19.9115 17.0584 26.8835 17.0584 26.8835"
        stroke={tintColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <View
        style={{
          width: 12,
          height: 12,
          position: 'absolute',
          top: -2.49,
          left: -2.75,
          zIndex: 1,
          borderRadius: 7,
          ...styles,
        }}></View>
    </Svg>
  );
};

export const SearchIcon = ({tintColor, styles}) => {
  return (
    <Svg
      style={{zIndex: 10}}
      width="22"
      height="22"
      viewBox="0 0 48 48"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5506 5.42859C32.0059 5.42859 39.6725 13.0934 39.6725 22.5505C39.6725 32.0076 32.0059 39.6724 22.5506 39.6724C13.0935 39.6724 5.42871 32.0076 5.42871 22.5505C5.42871 13.0934 13.0935 5.42859 22.5506 5.42859Z"
        stroke={tintColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.7975 36.9752C41.3556 36.9752 42.6184 38.24 42.6184 39.7962C42.6184 41.3562 41.3556 42.619 39.7975 42.619C38.2394 42.619 36.9746 41.3562 36.9746 39.7962C36.9746 38.24 38.2394 36.9752 39.7975 36.9752Z"
        stroke={tintColor}
        strokewidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <View
        style={{
          width: 12,
          height: 12,
          position: 'absolute',
          top: -2.49,
          left: -2.75,
          zIndex: 1,
          borderRadius: 7,
          ...styles,
        }}></View>
    </Svg>
  );
};

export const ChevronLeft = () => {
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <Path
        d="M16.25 19.5L9.75 13L16.25 6.5"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const MapPin = () => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <G ClipPath="url(#clip0_36:4404)">
        <Path
          d="M15.75 7.5C15.75 12.75 9 17.25 9 17.25C9 17.25 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_36:4404">
          <Rect width="18" height="18" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const Cancel = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 6L6 18"
        stroke={COLORS.lighgray}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 6L18 18"
        stroke={COLORS.lighgray}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const CheckIcon = ({tintColor, styles}) => {
  return (
    <View>
      <Svg width="22" height="22" viewBox="0 0 48 48" fill="none">
        <Path
          d="M16.8809 24.0003L21.6289 28.7463L31.1209 19.2543"
          stroke={tintColor}
          strokeWidth="1,5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.5 24.0002C5.5 37.8742 10.126 42.5002 24 42.5002C37.874 42.5002 42.5 37.8742 42.5 24.0002C42.5 10.1262 37.874 5.50024 24 5.50024C10.126 5.50024 5.5 10.1262 5.5 24.0002Z"
          stroke={tintColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
      <View
        style={{
          width: 12,
          height: 12,
          position: 'absolute',
          top: -2.49,
          left: -2.75,
          zIndex: 1,
          borderRadius: 7,
          ...styles,
        }}></View>
    </View>
  );
};
