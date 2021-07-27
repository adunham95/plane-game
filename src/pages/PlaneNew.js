import { Menu, Transition } from '@headlessui/react';
import {
  BriefcaseIcon, CalendarIcon, CheckIcon, ChevronDownIcon, CurrencyDollarIcon, LinkIcon, LocationMarkerIcon, PencilIcon, SwitchHorizontalIcon, UserGroupIcon,
} from '@heroicons/react/outline';
import React, { Fragment } from 'react';
import { getAllPlanesModels } from '../data/planeData';
// import { data } from '../data/planes';

const PlaneNew = () => {
  const newPlane = '';
  const planeModels = getAllPlanesModels().sort((a, b) => a.classID - b.classID);
  console.log(planeModels);
  return (
    <div>
      <h1>New Plane</h1>
      {

          planeModels.map((p) => (
            <PlaneCard plane={p} />
            // <div>
            //   <h2>
            //     {p.brand.name}
            //     {' '}
            //     {p.modelName}
            //   </h2>
            //   <span>
            //     {p.classID}
            //   </span>
            // </div>
          ))
      }
    </div>
  );
};

const PlaneCard = ({ plane }) => (
  <div className="lg:flex lg:items-center lg:justify-between p-2">
    <div className="flex-1 min-w-0">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        {plane.brand.name}
        {' '}
        {plane.modelName}
      </h2>
      <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
        {
            plane.types.map((t) => {
              switch (t) {
                case 'people':
                  return (
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <UserGroupIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Pax
                    </div>
                  );
                case 'cargo':
                  return (
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <BriefcaseIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Cargo
                    </div>
                  );
                default:
                  return <></>;
              }
            })
          }
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <SwitchHorizontalIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Speed:
          {' '}
          {plane.speed}
        </div>
        {/* <div className="mt-2 flex items-center text-sm text-gray-500">
          <CurrencyDollarIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          $120k &ndash; $140k
        </div> */}
        {/* <div className="mt-2 flex items-center text-sm text-gray-500">
          <CalendarIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Closing on January 9, 2020
        </div> */}
      </div>
    </div>
    <div className="mt-5 flex lg:mt-0 lg:ml-4">

      <span className="sm:ml-3">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <CheckIcon
            className="-ml-1 mr-2 h-5 w-5"
            aria-hidden="true"
          />
          Purchase
        </button>
      </span>
    </div>
  </div>
);

export default PlaneNew;
