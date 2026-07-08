import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Send } from "lucide-react";
import { content } from "@/lib/content";
import { getTranslation } from "@/i18n";

export default function Contato() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    projectType: "",
    message: "",
  });
  const [projectTypes, setProjectTypes] = useState<string[]>([]);
  const [selectPlaceholder, setSelectPlaceholder] = useState("Selecione uma opção");

  useEffect(() => {
    const updateProjectTypes = () => {
      setProjectTypes([
        getTranslation('contact_form_project_type_1'),
        getTranslation('contact_form_project_type_2'),
        getTranslation('contact_form_project_type_3'),
        getTranslation('contact_form_project_type_4'),
        getTranslation('contact_form_project_type_5'),
      ]);
      setSelectPlaceholder(getTranslation('contact_form_select_placeholder'));
    };

    updateProjectTypes();

    const observer = new MutationObserver(() => {
      updateProjectTypes();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({
        name: "",
        email: "",
        organization: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#7ad1e4]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight" data-i18n="contact_title">
              {content.contact.title}
            </h1>
            <p className="text-xl text-[#374151] leading-relaxed" data-i18n="contact_description">
              {content.contact.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#f8f9fa]" data-testid="section-contact-form" data-first-content="true">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="bg-white border border-[rgba(0,0,0,0.08)]">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" data-i18n="contact_form_name_label">{content.contact.form.name}</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Caio Jesus"
                          data-i18n-placeholder="contact_form_name_placeholder"
                          data-testid="input-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" data-i18n="contact_form_email_label">{content.contact.form.email}</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="caio@instituicao.com.br"
                          data-i18n-placeholder="contact_form_email_placeholder"
                          data-testid="input-email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="organization" data-i18n="contact_form_organization_label">
                          {content.contact.form.organization}
                        </Label>
                        <Input
                          id="organization"
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) =>
                            handleChange("organization", e.target.value)
                          }
                          placeholder="Instituição"
                          data-i18n-placeholder="contact_form_organization_placeholder"
                          data-testid="input-organization"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectType" data-i18n="contact_form_project_type_label">
                          {content.contact.form.projectType}
                        </Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) =>
                            handleChange("projectType", value)
                          }
                        >
                          <SelectTrigger id="projectType" data-testid="select-project-type">
                            <SelectValue placeholder={selectPlaceholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((type, index) => (
                              <SelectItem key={index} value={`type_${index + 1}`}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" data-i18n="contact_form_message_label">{content.contact.form.message}</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Descreva brevemente o contexto de seu projeto."
                        data-i18n-placeholder="contact_form_message_placeholder"
                        className="resize-none"
                        data-testid="textarea-message"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-[#000000] text-white hover:bg-[#1a1a1a] font-semibold"
                      data-testid="button-submit"
                    >
                      {isSubmitting ? (
                        <span data-i18n="contact_form_sending">{content.contact.form.sending}</span>
                      ) : (
                        <>
                          <span data-i18n="contact_form_submit">{content.contact.form.submit}</span>
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-white border border-[rgba(0,0,0,0.08)]">
                <CardContent className="p-6">
                  <p className="text-[#6b7280] leading-relaxed mb-6" data-i18n="contact_alternatives_intro">
                    Agende uma conversa de diagnóstico. Sem compromisso, sem proposta genérica.
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-black" data-i18n="contact_alternatives_title">
                      {content.contact.alternatives.title}
                    </h3>
                    <a
                      href={`mailto:${content.contact.alternatives.email}`}
                      className="flex items-center gap-3 p-3 bg-[#f8f9fa] hover:bg-[#e9ecef] transition-colors"
                      data-testid="link-email"
                    >
                      <Mail className="h-5 w-5 text-[#000000]" />
                      <span className="text-sm text-[#374151]" data-i18n="contact_email">
                        {content.contact.alternatives.email}
                      </span>
                    </a>
                    <a
                      href="https://wa.me/5521999176231"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-[#f8f9fa] hover:bg-[#e9ecef] transition-colors"
                      data-testid="link-whatsapp"
                    >
                      <MessageSquare className="h-5 w-5 text-[#000000]" />
                      <span className="text-sm text-[#374151]" data-i18n="contact_whatsapp">
                        WhatsApp
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#000000] border-[#000000]">
                <CardContent className="p-6">
                  <p className="text-white/90 text-sm leading-relaxed" data-i18n="contact_quote">
                    "A conversa de diagnóstico é uma oportunidade para entendermos seu contexto. Não é uma consultoria gratuita interminável — é um primeiro passo objetivo para avaliar se faz sentido trabalharmos juntos."
                  </p>
                  <p className="mt-4 text-[#7ad1e4] font-semibold tracking-widest text-sm uppercase" data-i18n="brand_microcopy">
                    {content.brand.microcopy}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
