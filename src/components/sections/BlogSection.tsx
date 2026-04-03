"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog-data'; 

export default function BlogSection() {
  return (
    // Height restricted to 100dvh for a perfectly framed "Journal" section
    <section className="relative bg-[#f9f8ee] h-[100dvh] min-h-[650px] max-h-[900px] flex flex-col justify-center overflow-hidden border-t border-heavy-metal/10 py-6">
      
      {/* Soft background glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-old-gold/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/4" />

      <div className="max-w-[1440px] mx-auto relative z-10 px-6 md:px-12 w-full">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-10">
          <div className="space-y-2 md:space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-old-gold/10 text-old-gold px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full border border-old-gold/20"
            >
              <BookOpen size={12} /> Industry Insights
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3rem] font-black uppercase italic tracking-tighter leading-[0.9] text-heavy-metal"
            >
              News & Insights <br className="hidden sm:block" /> <span className="text-old-gold">Journal.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="shrink-0"
          >
            <Link 
              href="/blogs" 
              className="inline-flex items-center gap-2 text-heavy-metal font-bold text-[11px] uppercase tracking-widest hover:text-old-gold transition-colors group pb-1 border-b-2 border-heavy-metal hover:border-old-gold"
            >
              View All Articles 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* --- BLOG GRID / MOBILE SCROLL --- */}
      <div className="max-w-[1440px] mx-auto relative z-10 w-full pl-6 md:px-12">
        <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 hide-scrollbar snap-x snap-mandatory pr-10 md:pr-0">
          {BLOG_POSTS.slice(0, 3).map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx + 1), duration: 0.6 }}
              className="w-[90vw] sm:w-[70vw] md:w-auto shrink-0 snap-center flex"
            >
              <Link 
                href={`/blogs/${post.slug}`}
                className="group flex flex-col bg-white border border-heavy-metal/10 shadow-lg hover:shadow-2xl hover:border-old-gold/40 transition-all duration-500 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] h-full w-full"
              >
                {/* Image Container - Better aspect ratio on mobile for readability */}
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] overflow-hidden bg-heavy-metal shrink-0">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-heavy-metal text-[9px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full shadow-sm">
                    {post.category}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-heavy-metal/40 font-bold text-[10px] uppercase tracking-widest mb-3">
                    <Clock size={12} className="text-old-gold" /> {post.date}
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-xl md:text-lg lg:text-xl font-black uppercase tracking-tighter leading-[1.1] mb-3 group-hover:text-old-gold transition-colors line-clamp-2 text-heavy-metal">
                    {post.title}
                  </h4>

                  {/* Excerpt - 2 lines allowed on mobile for better context */}
                  <p className="text-heavy-metal/60 font-medium text-[13px] lg:text-[14px] leading-relaxed mb-6 line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  {/* Action Link */}
                  <div className="flex items-center gap-2 text-old-gold font-bold text-[11px] uppercase tracking-[0.2em] mt-auto group-hover:text-heavy-metal transition-all">
                    Read Dispatch <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}