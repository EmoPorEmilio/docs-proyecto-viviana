"use client";
import Dialog from "@/components/Dialog";
import ProfileHead from "@/components/ProfileHead";
import Badge from "@/components/Badge";
import { sen } from "@/components/fonts";
import { Button, ButtonType } from "@/components/Button";
import Switch from "@/components/Switch";
import { Icon } from "@/components/Icon";
import { IconType } from "@/components/types";
import { Alert, AlertType } from "@/components/Alert";
import TimelineItem from "@/components/TimelineItem";
import { MdMenu } from "react-icons/md";
import CardCarousel from "@/components/CardCarousel";
import CalendarCard from "@/components/CalendarCard";
import Conversation from "@/components/Conversation";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <div className={"flex flex-1 flex-col p-4 md:p-9"}>
        <h1
          className={
            "text-4xl font-semibold text-primary-100 drop-shadow-title-primary"
          }
        >
          Botón
        </h1>
        <br />
        <span className={`${sen.className} text-lg text-primary-300`}>
          El botón viene en 5 variantes.
        </span>
        <br />
        <div className="flex flex-wrap justify-center gap-5">
          <Button
            type={ButtonType.Primary}
            onClick={() => {
              console.log("test1");
            }}
          >
            ME INTERESA
          </Button>
          <Button
            type={ButtonType.Secondary}
            onClick={() => {
              console.log("test1");
            }}
          >
            <span className="w-auto">SALÍ DE ACÁ</span>
          </Button>
          <Button
            type={ButtonType.Danger}
            onClick={() => {
              console.log("test1");
            }}
          >
            <span className="w-auto">ELIMINAR</span>
          </Button>
          <Button
            type={ButtonType.Success}
            onClick={() => {
              console.log("test1");
            }}
          >
            <span className="w-auto">GUARDAR</span>
          </Button>
          <Button
            type={ButtonType.Link}
            onClick={() => {
              console.log("test1");
            }}
          >
            <a href="/test" className="w-auto">
              BOTÓN LINK
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
