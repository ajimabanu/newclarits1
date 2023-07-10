import React, { useState } from "react";
import "../styles/Year.css";

export const Year = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "option1", label: "2024" },
    { value: "option1", label: "2023" },
    { value: "option2", label: "2022" },
    { value: "option3", label: "2021" },
    { value: "option3", label: "2020" },
    { value: "option3", label: "2019" },
    { value: "option3", label: "2018" },
    { value: "option3", label: "2017" },
    { value: "option3", label: "2016" },
  ];
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="dropdown">
        <button onMouseEnter={() => setIsOpen(true)} onClick={toggleDropdown}>
          {selectedOption ? selectedOption.label : "Year"}
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            {options.map((option) => (
              <li key={option.value} onClick={() => handleOptionClick(option)}>
                <a>{option.label}</a>
                <a className="dropdown__menu-item-description">
                  {option.description}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/*
      <div class="dropdown">
        <button
          className="dropdown__toggle"
          onMouseEnter={() => setIsOpen(true)}
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption.label : "Year"}
        </button>
        <ul class="dropdown-menu">
          <li>
            <a href="#">action 1</a>
          </li>
          <li>
            <a href="#">action 2</a>
          </li>
          <li>
            <a href="#">action 3</a>
          </li>
          <li>
            <a href="#">action 4</a>
          </li>
        </ul>
      </div>
      */}
    </div>
  );
};
