"use client";

import Sidebar from '@/components/ui/Sidebar';
import { Card, CardHeader, CardBody, Spacer } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";

export default function Home_i() {
    return (
      <div>
          <div className="layout">
              <Sidebar></Sidebar>
              <div>
                  <h1>Início</h1>
                  <Separator />
                  <div>
                  <Spacer x={4} />
                      <Card className="py-4 bg-card">
                          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                              <h4 className="font-bold text-large color-card">Empresa 1</h4>
                              <Spacer x={3} />
                              <small className="text-default-500 color-card">Localização</small>
                          </CardHeader>
                          <CardBody className="overflow-visible py-2">
                          </CardBody>
                      </Card>
                  </div>
              </div>
          </div>
      </div>
  );
}
