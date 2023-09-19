"use client";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from './input';
import { Button } from './button';
import api from '../../lib/api';
import { useToast } from './use-toast';
 
const formSchema = z.object({
  name: z.string().min(3, {
    message: "O nome é muito curto."
  }),
  email: z
    .string()
    .min(1, { message: "O email deve ser preenchido" })
    .email("O email informado é inválido")
})

interface AddUserModalProps {
  children: ReactNode;
}

export default function AddUserModal({ children }: AddUserModalProps) {
  const [open, setOpen] = useState(false)
  const [cmpId, setCmpId] = useState("");
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  })

  const getMyIds = useCallback(async () => {
    const cmpId = localStorage.getItem('@pi_cmpId');
    if (cmpId) {
      setCmpId(cmpId)
    }
  }, [])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await api.post('user', {
      name: values.name,
      email: values.email,
      companyId: cmpId,
      type: 'other',
      isPreRegister: true
    })

    if (res.data.error === false) {
      toast({
        title: "Sucesso!",
        description: 'Sócio adicionado com sucesso'
      })
      setOpen(false)
      form.reset()
    } else {
      toast({
        title: "Erro ao adicionar sócio",
        description: 'Tente novamente mais tarde',
        variant: 'destructive'
      })
    }
  }

  useEffect(() => {
    getMyIds()
  }, [getMyIds])
  
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicione um novo sócio</DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-white/70'>Nome completo do sócio</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: José Maria dos Santos" {...field} />
                    </FormControl>
                    <FormMessage className='text-red-400'/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-white/70'>E-mail do sócio</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: jose.santos@email.com" {...field} />
                    </FormControl>
                    <FormMessage className='text-red-400'/>
                  </FormItem>
                )}
              />

              <Button type="submit" className='w-full'>Adicionar</Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
