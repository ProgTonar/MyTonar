"use client";

import { useState, useEffect } from "react";
import Button from "../ButtonDefault/ButtonDefault";
import styles from "./BlockSpravka.module.scss";
import Image from "next/image";
import ArrowDown from "@/assets/images/bottom-icon.svg";

type StatusType = "Отправлена" | "В работе" | "Справка готова" | "";

interface BlockSpravkaProps {
  title: string;
  periodDisabled?: boolean;
  onOrder?: (period?: string) => void;
  className?: string;
}

const periods = [
  { value: "1", label: "1 месяц" },
  { value: "3", label: "3 месяца" },
  { value: "6", label: "6 месяцев" },
  { value: "12", label: "12 месяцев" },
];

const getStatusColor = (status: StatusType) => {
  switch (status) {
    case "Отправлена":
      return styles.status_sent;
    case "В работе":
      return styles.status_inProgress;
    case "Справка готова":
      return styles.status_ready;
    default:
      return "";
  }
};

const BlockSpravka = ({
  title,
  periodDisabled = false,
  className,
}: BlockSpravkaProps) => {
  const [selectPeriod, setSelectPeriod] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<StatusType>("");
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedPeriod = periods.find((p) => p.value === selectPeriod);

  const handleSelect = (value: string) => {
    setSelectPeriod(value);
    setIsOpen(false);
  };

  const simulateProcessing = async () => {
    setIsProcessing(true);
    setCurrentStatus("Отправлена");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCurrentStatus("В работе");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setCurrentStatus("Справка готова");
    setIsProcessing(false);
  };

  const handleOrder = () => {
    simulateProcessing();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(`.${styles.selectContainer}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`${styles.section} ${className || ""}`}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
        </div>

        {!periodDisabled ? (
          <div className={styles.period}>
            <div className={styles.period_title}>Выберите период:</div>
            <div className={styles.selectContainer}>
              <div
                className={`${styles.select} ${isOpen ? styles.open : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(!isOpen);
                }}
              >
                <span>{selectedPeriod?.label || "Не выбрано"}</span>
                <Image
                  src={ArrowDown}
                  alt="Arrow"
                  width={16}
                  height={16}
                  className={`${styles.arrow} ${isOpen ? styles.rotated : ""}`}
                />
              </div>
              {isOpen && (
                <div className={styles.dropdown}>
                  {periods.map((period) => (
                    <div
                      key={period.value}
                      className={`${styles.option} ${
                        selectPeriod === period.value ? styles.selected : ""
                      }`}
                      onClick={() => handleSelect(period.value)}
                    >
                      {period.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.period}></div>
        )}

        {currentStatus ? (
          <div className={styles.status}>
            <div className={styles.status_title}>Статус заявки:</div>
            <div className={styles.status_bar_container}>
              <div
                className={`${styles.status_bar} ${getStatusColor(
                  currentStatus
                )}`}
              />
            </div>
            <div
              className={`${styles.status_value} ${getStatusColor(
                currentStatus
              )}`}
            >
              {currentStatus}
            </div>
          </div>
        ) : (
          <div className={styles.status}></div>
        )}

        <div className={styles.button_section}>
          <Button
            onClick={handleOrder}
            disabled={(!periodDisabled && !selectPeriod) || isProcessing}
          >
            {isProcessing ? "Обработка..." : "Заказать справку"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default BlockSpravka;
