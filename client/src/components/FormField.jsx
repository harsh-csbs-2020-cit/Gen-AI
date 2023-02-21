import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
  // isTapToSpeak,
  // handleTapToSpeak
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[#8d99a2]"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#8d99a2] py-1 px-2 rounded-[5px] text-black"
        >
          Surprise me
        </button>
      )}
      {/* {isTapToSpeak && (
        <button
          type="button"
          onClick={handleTapToSpeak}
          className="font-semibold text-xs bg-[#8d99a2] py-1 px-2 rounded-[5px] text-black"
        >
          Tap to speak
        </button>
      )} */}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-[#333333] border border-[#6f6f6f] text-[#e3e3e3] text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;
