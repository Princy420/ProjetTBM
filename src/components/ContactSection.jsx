// src/components/ContactSection.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react';

const contactInfos = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Antananarivo, Madagascar",
    sub: "Anosy, 101",
  },
  {
    icon: Mail,
    label: "Email",
    value: "tokontanybemalagasy@gmail.com",
    sub: "Réponse sous 48h",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+261 34 50 456 24 ",
    sub: "Lun – Ven, 8h – 17h",
  },
];

const N8N_URL = "http://localhost:5678/webhook/tontotanyBM"

const inputClass =
  "w-full bg-[#F9F7F2] border border-[#E5D5C5] rounded-xl px-4 py-3 text-sm text-[#2D2D2D] placeholder-[#2D2D2D]/40 focus:outline-none focus:border-[#C84B31] focus:ring-2 focus:ring-[#C84B31]/10 transition-all duration-300";

const ContactSection = () => {
    const [form,setForm] = useState({name:'',email:'',subject: '', message: ''});
    const [sent,setSent] = useState(false);
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e)=> 
        setForm((prev)=>({...prev, [e.target.name]: e.target.value}));

        const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
 
    try {
      const res = await fetch(N8N_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: form.name,
          email: form.email,
          sujet: form.subject,
          message: form.message,
          date: new Date().toLocaleString('fr-MG', { timeZone: 'Indian/Antananarivo' }),
        }),
      });
 
      if (!res.ok) throw new Error(`Erreur serveur : ${res.status}`);
 
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError("Une erreur s'est produite. Veuillez réessayer ou nous contacter directement par email.");
      console.error('n8n webhook error:', err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contact" className="py-24 bg-[#F9F7F2] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C84B31]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DDA63A]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C84B31] text-sm font-semibold uppercase tracking-wider">
            Rejoignez-nous
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mt-3 mb-4">
            Contactez-nous
          </h2>
          <p className="max-w-2xl mx-auto text-[#2D2D2D]/60 text-lg">
            Une idée, un partenariat, une question ? Nous sommes à votre écoute. 
            Ensemble, construisons un Madagascar meilleur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── Left panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info cards */}
            {contactInfos.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-[#E5D5C5]/30 group hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#C84B31]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C84B31] transition-colors duration-300">
                    <Icon size={20} className="text-[#C84B31] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#C84B31] mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-sm font-semibold text-[#2D2D2D]">{info.value}</p>
                    <p className="text-xs text-[#2D2D2D]/50 mt-0.5">{info.sub}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Divider */}
            <div className="h-px bg-[#E5D5C5] my-2" />

            

            {/* FIHAVANANA quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-[#C84B31] to-[#B5412A] rounded-2xl p-6 text-white"
            >
              <p className="font-bold text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                FIHAVANANA
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                « Le lien qui nous unit est plus fort que tout obstacle. 
                Chaque message est une nouvelle connexion. »
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right panel — Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-[#E5D5C5]/30"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                /* Success state */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-5"
                >
                  <div className="w-20 h-20 rounded-full bg-[#C84B31]/10 flex items-center justify-center">
                    <CheckCircle size={40} className="text-[#C84B31]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D2D2D]">Message envoyé !</h3>
                  <p className="text-[#2D2D2D]/60 max-w-xs">
                    Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="mt-2 text-sm text-[#C84B31] font-medium underline underline-offset-4 hover:no-underline transition-all"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                /* Form */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#C84B31] mb-4">
                      Envoyez-nous un message
                    </p>
                  </div>

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#2D2D2D]/60 uppercase tracking-wider">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#2D2D2D]/60 uppercase tracking-wider">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#2D2D2D]/60 uppercase tracking-wider">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" disabled>Choisir un sujet…</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="benevolat">Bénévolat</option>
                      <option value="don">Don & soutien</option>
                      <option value="programme">Informations sur un programme</option>
                      <option value="presse">Presse & médias</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#2D2D2D]/60 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre demande ou votre idée…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="w-full bg-[#C84B31] text-white py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#B5412A] transition-all duration-300 hover:shadow-lg hover:shadow-[#C84B31]/30 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send size={16} />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-[#2D2D2D]/40">
                    En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;