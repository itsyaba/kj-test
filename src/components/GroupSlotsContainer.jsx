import React, { useState } from "react";

export default function GroupSlotsContainer() {
  const [groupGenerator, setGroupGenerator] = useState({});
  const [groupList, setGroupList] = useState([
    {
      group: 1,
      slot: [1, 2, 3],
    },
    {
      group: 2,
      slot: [1, 2],
    },
  ]);

  const AddNewGroupHandeler = () => {
    setGroupList((preValue) => {
      return [
        ...preValue,
        {
          group: groupList.length + 1,
          slot: [1],
        },
      ];
    });
    console.log(groupList);
  };

  const groupRemoveHandeler = (val) => {
    const newRes = [...groupList];
    const deleteGroup = newRes.filter((element) => element.group !== val);
    setGroupList(deleteGroup);
  };

  const slotRemoveHandler = (slot, group) => {
    console.log(group);
    console.log(slot);
    //     console.log(groupList[group - 1]);
    console.log(groupList[group - 1].slot[slot - 1]);
    const newSlotVal = groupList[group - 1].slot[slot - 1];
  };

  const AddNewSlotHandeler = (res) => {
    const copiedGroupList = [...groupList];
    const value = copiedGroupList
    //     setGroupList(groupList[res.group - 1].slot.length + 1);
    //     console.log(val);
    //     setGroupList((preValue) => {
    //       return [
    //         ...preValue,
    //         {
    //           group: groupList.length + 1,
    //           slot: [1],
    //         },
    //       ];
    //     });
    //     console.log(groupList);
  };

  return (
    <div className="border-2 border-gray-400 m-2 rounded-md font-sans">
      <nav className="bg-gray-200 p-2 font-light mb-4">
        <p>Group/Slots</p>
      </nav>
      <main>
        {/* 
        <div className="my-8">
          <div className="flex items-start justify-start ">
            <div className="w-1/2 ">
              <h4 className="border-gray-400 rounded-sm border-y-2 p-1 w-full">
                # Group
              </h4>
              <div>
                <button className="bg-red-500 py-1 px-4 rounded-md text-white m-2">
                  -
                </button>
                <input
                  type="text"
                  placeholder="group 1"
                  className="text-black border-2 border-gray-400 m-2 rounded-md py-1 px-3 "
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <h4 className="border-gray-400 rounded-sm border-y-2 p-1 w-full">
                  Slots
                </h4>
                <div>
                  <input
                    type="text"
                    placeholder="group 1"
                    className="text-black border-2 border-gray-400 m-2 rounded-md py-1 px-3 "
                  />
                  <button className="bg-red-500 py-1 px-4 rounded-md text-white m-2">
                    -
                  </button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="group 2"
                    className="text-black border-2 border-gray-400 m-2 rounded-md py-1 px-3 "
                  />
                  <button className="bg-red-500 py-1 px-4 rounded-md text-white m-2">
                    -
                  </button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="group 1"
                    className="text-black border-2 border-gray-400 m-2 rounded-md py-1 px-3 "
                  />
                  <button className="bg-red-500 py-1 px-4 rounded-md text-white m-2">
                    -
                  </button>
                </div>
              </div>
              <button className="bg-blue-400 text-white px-2 py-0.5 border-none ">
                {" "}
                + Add Slot
              </button>
            </div>
          </div>
        </div>
        <div className="my-8">
          <div className="flex items-start justify-start">
            <div className="w-1/2 ">
              <h4 className="border-gray-400 rounded-sm border-y-2 p-1 w-full">
                # Group
              </h4>
              <div>
                <button className="bg-red-500 py-1 px-4 rounded-md text-white m-2">
                  -
                </button>
                <input
                  type="text"
                  placeholder="group 1"
                  className="text-black border-2 border-gray-400 m-2 rounded-md py-1 px-3 "
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <h4 className="border-gray-400 rounded-sm border-y-2 p-1 w-full">
                  Slots
                </h4>
                <div>
                  <input
                    type="text"
                    placeholder="group 1"
                    className="text-black border-2 border-gray-400 m-2 rounded-md py-1 px-3 "
                  />
                  <button className="bg-red-500 py-1 px-4 rounded-md text-white m-2">
                    -
                  </button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="group 1"
                    className="text-black border-2 border-gray-400 m-2 rounded-md py-1 px-3 "
                  />
                  <button className="bg-red-500 py-1 px-4 rounded-md text-white m-2">
                    -
                  </button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="group 1"
                    className="text-black border-2 border-gray-400 m-2 rounded-md py-1 px-3 "
                  />
                  <button className="bg-red-500 py-1 px-4 rounded-md text-white m-2">
                    -
                  </button>
                </div>
              </div>
              <button className="bg-blue-400 text-white px-2 py-0.5 border-none ">
                {" "}
                + Add Slot
              </button>
            </div>
          </div>
        </div> */}
        {groupList.map((value) => (
          <div className="my-8" key={value.group}>
            <div className="flex items-start justify-start ">
              <div className="w-1/2 ">
                <h4 className="border-gray-400 rounded-sm border-y-2 p-1 w-full">
                  # Group
                </h4>
                <div>
                  <button
                    className="bg-red-500 py-1 px-4 rounded-md text-white m-2"
                    onClick={() => groupRemoveHandeler(value.group)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    placeholder={`group${value.group}`}
                    className="text-black border-2 border-gray-400 m-2 rounded-md py-1 px-3 "
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div>
                  <h4 className="border-gray-400 rounded-sm border-y-2 p-1 w-full">
                    Slots
                  </h4>
                  {value.slot.map((slotRes) => (
                    <div key={slotRes}>
                      <input
                        type="text"
                        placeholder={`g${value.group}_slot${slotRes}`}
                        className="text-black border-2 border-gray-400 m-2 rounded-md py-1 px-3 "
                      />
                      <button
                        className="bg-red-500 py-1 px-4 rounded-md text-white m-2"
                        onClick={() => slotRemoveHandler(slotRes, value.group)}
                      >
                        -
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  className="bg-blue-500 text-white px-2 py-0.5 border-none "
                  onClick={() => AddNewSlotHandeler(value)}
                >
                  {" "}
                  + Add Slot
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
      <footer className="border-t-2">
        <button
          className="bg-blue-700 border-none p-2 cursor-pointer text-white rounded-sm m-2 hover:bg-blue-600"
          onClick={AddNewGroupHandeler}
        >
          + Add Group
        </button>
      </footer>
    </div>
  );
}
