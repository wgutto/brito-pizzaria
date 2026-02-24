import { Building2, Calendars, Contact, CreditCard } from "lucide-react"

export const Footer = () => {
    return (
        <div className="grid grid-cols-2 justify-around border-t py-6 gap-4 px-4 min-[600]:flex min-[600]:gap-2">
            <div className="flex flex-col gap-2">
                <h1 className="font-semibold flex items-center gap-2">
                    <Building2 className="size-5" />
                    Informações da Empresa
                </h1>
                <p className="text-sm text-muted-foreground border-primary border-l pl-2 ml-1">Brito Pizzaria</p>
                <p className="text-sm text-muted-foreground border-primary border-l pl-2 ml-1">CNPJ</p>
                <p className="text-sm text-muted-foreground border-primary border-l pl-2 ml-1">Atendimento exclusivo via delivery.</p>
                <p className="text-sm text-muted-foreground border-primary border-l pl-2 ml-1">© 2026 Brito Pizzaria — Todos os direitos reservados.</p>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="font-semibold flex items-center gap-2">
                    <Contact className="size-5" />
                    Contato
                </h1>
                <p className="flex items-center text-muted-foreground text-sm border-primary border-l pl-2 gap-1 ml-1">WhatsApp</p>
                <p className="flex items-center text-muted-foreground text-sm border-primary border-l pl-2 gap-1 ml-1">Instagram</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1 border-primary border-l pl-2 ml-1">+55 (88) 8 8888-888</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1 border-primary border-l pl-2 ml-1">britopizzaria@gmail.com</p>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="font-semibold flex items-center gap-2">
                    <Calendars className="size-5" />
                    Horário de Funcionamento
                </h1>
                <p className="text-muted-foreground text-sm border-primary border-l pl-2 ml-1">Segunda a Quinta: 18h às 23h</p>
                <p className="text-muted-foreground text-sm border-primary border-l pl-2 ml-1">Sexta a Domingo: 18h às 00h</p>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="font-semibold flex items-center gap-2">
                    <CreditCard className="size-5" />
                    Formas de Pagamento
                </h1>
                <p className="text-muted-foreground text-sm border-primary border-l pl-2 ml-1">PIX</p>
                <p className="text-muted-foreground text-sm border-primary border-l pl-2 ml-1">Cartão de crédito</p>
                <p className="text-muted-foreground text-sm border-primary border-l pl-2 ml-1">Cartão de débito</p>
                <p className="text-muted-foreground text-sm border-primary border-l pl-2 ml-1">Dinheiro</p>
            </div>
        </div>
    )
}